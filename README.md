# Austin Link Service

## 项目说明
Austin Link Service 是一个基于 Node.js 的服务应用。

## 环境要求
- Node.js 20.18.0+
- Docker
- PM2

## 本地开发
```bash
# 安装依赖
npm install

# 开发模式运行
npm run dev

# 生产模式运行
npm start
```

## Docker 部署
```bash
# 构建镜像
docker build -t austin-link .

# 运行容器
docker run -d -p 8091:8091 austin-link
```

## Jenkins 部署
1. 创建自由项目
2. 配置 Git 仓库
3. 添加构建步骤：
   - 执行 Shell 脚本：`./deploy.sh`

## 环境变量
项目使用 .env 文件配置环境变量：
- PORT: 服务端口（默认：8091）
- NODE_ENV: 运行环境
- APP_NAME: 应用名称
- APP_VERSION: 应用版本
- LOG_LEVEL: 日志级别
- TZ: 时区设置

## 注意事项
- 确保 Docker 和 PM2 已正确安装
- 部署前检查 .env 文件配置
- 确保端口 8091 未被占用

![](doc/images/1.jpg)

:fire:项目在线演示地址：[http://119.91.205.248:3001/](http://119.91.205.248:3001/)

:fire:后端仓库[Gitee](https://gitee.com/zhongfucheng/austin)、[GitHub](https://gitee.com/zhongfucheng/austin)

:fire:**11W+字，共107个文档，带你玩转austin**，详情可戳：[消息推送平台文档](https://www.yuque.com/u1047901/eg5qvy/hh0gk5p4uwie8bva)

![](doc/images/9.png)

