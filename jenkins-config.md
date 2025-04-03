# SMS Admin Jenkins部署指南

## 1. Jenkins环境准备

### 1.1 运行Jenkins容器
```bash
docker run -d --name jenkins --restart unless-stopped \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /root/.nvm/versions/node/v20.19.0/bin/node:/usr/local/bin/node \
  -v /root/.nvm/versions/node/v20.19.0/lib:/usr/local/lib \
  -v /var/backups/sms-admin:/var/backups/sms-admin \
  -v /var/log/sms-admin:/var/log/sms-admin \
  --group-add 998 \
  jenkins/jenkins:lts-jdk11
```

### 1.2 配置Node环境
```bash
# 使用root用户进入容器
docker exec -it --user root jenkins bash

# 创建npm和pm2的符号链接
ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm
ln -s /usr/local/lib/node_modules/pm2/bin/pm2 /usr/local/bin/pm2
```

### 1.3 安装Docker CLI
```bash
# 使用root用户安装Docker CLI
docker exec -it --user root jenkins bash -c "apt-get update && apt-get install -y docker.io"
```

### 1.4 配置目录权限
```bash
# 在宿主机上创建必要的目录
sudo mkdir -p /var/backups/sms-admin /var/log/sms-admin

# 设置目录权限（使用root用户）
sudo chown -R root:root /var/backups/sms-admin /var/log/sms-admin
sudo chmod 755 /var/backups/sms-admin /var/log/sms-admin
```

## 2. Jenkins项目配置

### 2.1 创建自由项目
1. 登录Jenkins控制台
2. 点击"新建任务"
3. 选择"自由风格项目"
4. 项目名称填写：`sms-admin`

### 2.2 配置Git仓库
1. 在"源码管理"部分选择"Git"
2. 填写仓库URL
3. 选择分支：`*/main`
4. 添加Git凭证（如果需要）

### 2.3 构建触发器
1. 选择"GitHub hook trigger for GITScm polling"
2. 配置GitHub Webhook（如果需要）

### 2.4 构建环境
1. 勾选"Delete workspace before build starts"
2. 勾选"Abort the build if it's stuck"

### 2.5 构建步骤
1. 添加"执行shell"步骤
2. 填写以下构建脚本：
```bash
#!/bin/bash

# 设置环境变量
export NODE_ENV=production
export PORT=8091

# 执行部署
chmod +x ./deploy.sh
./deploy.sh
```

### 2.6 构建后操作
1. 添加"Archive the artifacts"步骤
2. 填写要归档的文件：
   - `*.log`
   - `*.env`
   - `deploy.sh`

## 3. 部署脚本说明

### 3.1 deploy.sh功能
- 构建Docker镜像
- 停止并删除旧容器
- 运行新容器
- 配置PM2管理
- 健康检查

### 3.2 环境变量配置
- PORT: 8091
- NODE_ENV: production
- PM2_HOME: /root/.pm2

## 4. 验证部署

### 4.1 检查服务状态
```bash
# 检查容器状态
docker ps | grep sms-admin

# 检查PM2进程
pm2 list

# 检查服务健康状态
curl http://localhost:8091/api/status
```

### 4.2 查看日志
```bash
# 查看容器日志
docker logs sms-admin

# 查看PM2日志
pm2 logs sms-admin

# 查看应用日志
tail -f /var/log/sms-admin/app.log
```

## 5. 故障排查

### 5.1 常见问题
1. 端口冲突
   - 检查8091端口是否被占用
   - 使用`lsof -i :8091`查看

2. 权限问题
   - 确保目录权限正确设置
   - 检查Docker权限

3. 构建失败
   - 检查npm依赖安装
   - 查看构建日志

### 5.2 解决方案
1. 权限修复
```bash
# 修复目录权限
sudo chown -R root:root /var/backups/sms-admin /var/log/sms-admin
sudo chmod 755 /var/backups/sms-admin /var/log/sms-admin

# 修复Docker权限
sudo chmod 666 /var/run/docker.sock
```

2. 环境检查
```bash
# 检查Node环境
node -v
npm -v

# 检查Docker环境
docker --version
docker ps

# 检查PM2环境
pm2 -v
pm2 list
```

## 6. 注意事项
1. 确保Jenkins容器有足够的资源
2. 定期备份Jenkins配置
3. 监控构建历史
4. 保持依赖版本更新
5. 定期清理构建产物
6. 目录权限使用root用户设置
7. 确保所有挂载目录存在且有正确权限 