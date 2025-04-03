# Jenkins容器配置指南

## 1. 运行Jenkins容器
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

## 2. 配置Node环境
```bash
# 使用root用户进入容器
docker exec -it --user root jenkins bash

# 创建npm和pm2的符号链接
ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm
ln -s /usr/local/lib/node_modules/pm2/bin/pm2 /usr/local/bin/pm2
```

## 3. 安装Docker CLI
```bash
# 使用root用户安装Docker CLI
docker exec -it --user root jenkins bash -c "apt-get update && apt-get install -y docker.io"
```

## 4. 验证环境
```bash
# 进入容器
docker exec -it jenkins bash

# 验证命令
node -v
npm -v
pm2 -v
docker ps
```

## 关键说明

### 挂载说明
- node可执行文件 → /usr/local/bin/node
- node_modules目录 → /usr/local/lib
- docker.sock → 使用宿主机Docker
- 备份和日志目录 → 持久化存储

### 权限说明
- 创建符号链接需要root用户
- 安装软件需要root用户
- 使用docker命令需要docker组权限

### 验证要点
- node命令可用
- npm命令可用
- pm2命令可用
- docker命令可用

## 注意事项
1. 确保宿主机上的Node环境路径正确
2. 符号链接要保持与宿主机相同的结构
3. 需要root权限的操作要使用--user root
4. 容器重启后需要重新创建符号链接

## 故障排查
1. 如果命令找不到，检查挂载路径是否正确
2. 如果权限不足，使用root用户操作
3. 如果模块找不到，检查node_modules目录挂载
4. 如果docker命令不可用，检查docker.sock挂载和组权限 