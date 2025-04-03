#!/bin/bash

# 开启详细日志
set -x

# 错误处理
set -e
trap 'echo "Error occurred at line $LINENO. Command: $BASH_COMMAND"; exit 1' ERR

# 设置日志文件
LOG_DIR="/var/log/sms-admin"
mkdir -p ${LOG_DIR}
# 使用临时文件进行日志记录，避免权限问题
TEMP_LOG="/tmp/deploy.log"
TEMP_ERROR_LOG="/tmp/deploy.error.log"
exec 1> >(tee -a "${TEMP_LOG}")
exec 2> >(tee -a "${TEMP_ERROR_LOG}" >&2)

# 加载环境变量
if [ ! -f .env ]; then
    echo "Error: .env file not found"
    exit 1
fi

# 加载并验证环境变量
export $(cat .env | grep -v '^#' | xargs)
required_vars=("PORT" "CONTAINER_MEMORY" "CONTAINER_CPUS" "NODE_ENV" "APP_NAME" "APP_VERSION" "LOG_LEVEL" "TZ")
for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo "Error: Required environment variable $var is not set"
        exit 1
    fi
done

# 设置变量
DOCKER_IMAGE="sms-admin"
DOCKER_TAG="7"
BACKUP_DIR="/var/backups/${DOCKER_IMAGE}"

# 检查 Docker 服务状态（容器环境兼容的方式）
if ! docker info >/dev/null 2>&1; then
    echo "Error: Docker daemon is not accessible"
    exit 1
fi

# 检查磁盘空间
required_space=1000000 # 1GB in KB
available_space=$(df / | awk 'NR==2 {print $4}')
if [ "$available_space" -lt "$required_space" ]; then
    echo "Error: Insufficient disk space. Required: 1GB, Available: $(($available_space / 1024))MB"
    exit 1
fi

# 安装必要的工具
if ! command -v lsof >/dev/null 2>&1; then
    echo "Installing lsof..."
    apt-get update && apt-get install -y lsof
fi

# 检查必要的命令
command -v docker >/dev/null 2>&1 || {
    echo "Error: Docker is required but not installed. Aborting." >&2
    exit 1
}
command -v pm2 >/dev/null 2>&1 || {
    echo "Error: PM2 is required but not installed. Aborting." >&2
    exit 1
}

# 创建必要的目录
mkdir -p ${BACKUP_DIR}
mkdir -p ${LOG_DIR}

# 检查目录权限
if [ ! -w "${LOG_DIR}" ]; then
    echo "Warning: No write permission for log directory: ${LOG_DIR}, using temporary directory"
    LOG_DIR="/tmp/sms-admin-logs"
    mkdir -p ${LOG_DIR}
fi

# 检查端口占用
if lsof -i :${PORT} >/dev/null; then
    echo "Error: Port ${PORT} is already in use. Please check and free the port."
    exit 1
fi

echo "Starting deployment process..."

# 停止并删除旧容器（如果存在）
if docker ps -a -q --filter "name=${DOCKER_IMAGE}" >/dev/null; then
    echo "Stopping and removing old container..."
    docker stop ${DOCKER_IMAGE} || true
    docker rm ${DOCKER_IMAGE} || true
fi

# 构建Docker镜像
echo "Building Docker image..."
if ! docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .; then
    echo "Error: Docker build failed"
    exit 1
fi

# 运行新容器
echo "Starting new container..."
if ! docker run -d \
    --name ${DOCKER_IMAGE} \
    -p ${PORT}:${PORT} \
    --restart unless-stopped \
    --memory=${CONTAINER_MEMORY} \
    --cpus=${CONTAINER_CPUS} \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /usr/local/bin/pm2:/usr/local/bin/pm2 \
    -v ${LOG_DIR}:/app/logs \
    -e PORT=${PORT} \
    -e NODE_ENV=${NODE_ENV} \
    -e APP_NAME=${APP_NAME} \
    -e APP_VERSION=${APP_VERSION} \
    -e LOG_LEVEL=${LOG_LEVEL} \
    -e TZ=${TZ} \
    -e PM2_HOME=/root/.pm2 \
    ${DOCKER_IMAGE}:${DOCKER_TAG}; then
    echo "Error: Failed to start container"
    exit 1
fi

# 等待容器启动
echo "Waiting for container to start..."
sleep 10

# 检查容器是否正在运行
if ! docker ps -q --filter "name=${DOCKER_IMAGE}" >/dev/null; then
    echo "Error: Container failed to start. Checking logs..."
    docker logs ${DOCKER_IMAGE}
    exit 1
fi

# 检查容器健康状态
if ! docker ps -q --filter "name=${DOCKER_IMAGE}" --filter "health=healthy" >/dev/null; then
    echo "Error: Container is not healthy. Checking logs..."
    docker logs ${DOCKER_IMAGE}
    exit 1
fi

# 使用PM2管理
echo "Managing with PM2..."
if ! pm2 restart ${DOCKER_IMAGE} 2>/dev/null; then
    echo "Starting new PM2 process..."
    if ! pm2 start docker --name ${DOCKER_IMAGE} -- run ${DOCKER_IMAGE}:${DOCKER_TAG}; then
        echo "Error: Failed to start PM2 process"
        exit 1
    fi
fi

# 清理旧镜像
echo "Cleaning up old images..."
docker image prune -f

# 复制日志到最终位置（如果可能）
if [ -w "/var/log/sms-admin" ]; then
    cp ${TEMP_LOG} "/var/log/sms-admin/deploy.log" 2>/dev/null || true
    cp ${TEMP_ERROR_LOG} "/var/log/sms-admin/deploy.error.log" 2>/dev/null || true
fi

echo "Deployment completed successfully!"
