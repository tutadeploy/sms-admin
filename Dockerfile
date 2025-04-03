# 构建阶段
FROM node:20.18.0-alpine AS builder
WORKDIR /app

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production

# 复制源代码
COPY . .

# 运行阶段
FROM node:20.18.0-alpine
WORKDIR /app

# 设置时区
ENV TZ=Asia/Shanghai
RUN apk add --no-cache tzdata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime
RUN echo $TZ >/etc/timezone

# 安装PM2
RUN npm install -g pm2

# 从构建阶段复制文件
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/index.html ./index.html
COPY --from=builder /app/public ./public
COPY --from=builder /app/pages ./pages
COPY --from=builder /app/sdk ./sdk
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.env ./.env

# 创建日志目录并设置权限
RUN mkdir -p /app/logs
RUN chown -R node:node /app/logs

# 切换到非root用户
USER node

# 暴露端口
EXPOSE 8091

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8091/ || exit 1

# 启动命令
CMD ["pm2-runtime", "server.js"]
