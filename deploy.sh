#!/bin/bash

# 开启详细日志
set -x

# 错误处理
set -e
trap 'echo "Error occurred at line $LINENO"; exit 1' ERR

# 加载环境变量
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

# 设置变量
DOCKER_IMAGE="sms-admin"
DOCKER_TAG="7"
BACKUP_DIR="/var/backups/${DOCKER_IMAGE}"
LOG_DIR="/var/log/${DOCKER_IMAGE}"

# 检查必要的命令
command -v docker >/dev/null 2>&1 || {
    echo "Docker is required but not installed. Aborting." >&2
    exit 1
}
command -v pm2 >/dev/null 2>&1 || {
    echo "PM2 is required but not installed. Aborting." >&2
    exit 1
}

# 创建必要的目录
mkdir -p ${BACKUP_DIR}
mkdir -p ${LOG_DIR}

# 检查端口占用
if lsof -i :${PORT} >/dev/null; then
    echo "Port ${PORT} is already in use. Please check and free the port."
    exit 1
fi

echo "Starting deployment process..."

# 备份当前版本
if docker ps -q --filter "name=${DOCKER_IMAGE}" >/dev/null; then
    echo "Backing up current version..."
    docker commit ${DOCKER_IMAGE} ${DOCKER_IMAGE}:backup-$(date +%Y%m%d-%H%M%S)
fi

# 构建Docker镜像
echo "Building Docker image..."
docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .

# 停止并删除旧容器
echo "Stopping and removing old container..."
docker stop ${DOCKER_IMAGE} || true
docker rm ${DOCKER_IMAGE} || true

# 运行新容器
echo "Starting new container..."
docker run -d \
    --name ${DOCKER_IMAGE} \
    -p ${PORT}:${PORT} \
    --restart unless-stopped \
    --memory=${CONTAINER_MEMORY} \
    --cpus=${CONTAINER_CPUS} \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /usr/local/bin/pm2:/usr/local/bin/pm2 \
    -v ${LOG_DIR}:/app/logs \
    -v $(pwd)/.env:/app/.env \
    -e PM2_HOME=/root/.pm2 \
    ${DOCKER_IMAGE}:${DOCKER_TAG}

# 等待容器启动
echo "Waiting for container to start..."
sleep 10

# 检查容器健康状态
if ! docker ps -q --filter "name=${DOCKER_IMAGE}" --filter "health=healthy" >/dev/null; then
    echo "Container is not healthy. Checking logs..."
    docker logs ${DOCKER_IMAGE}
    exit 1
fi

# 使用PM2管理
echo "Managing with PM2..."
pm2 restart ${DOCKER_IMAGE} || pm2 start docker --name ${DOCKER_IMAGE} -- run ${DOCKER_IMAGE}:${DOCKER_TAG}

# 清理旧镜像
echo "Cleaning up old images..."
docker image prune -f

echo "Deployment completed successfully!"
