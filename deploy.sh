#!/bin/bash
set -e

APP_NAME="dev-portfolio"
IMAGE_NAME="dev-portfolio"
PORT=3000

echo "🚀 开始部署 $APP_NAME ..."

# 1. 拉取最新代码
echo "📦 拉取最新代码..."
git pull origin master

# 2. 检查环境变量文件
if [ ! -f ".env.production" ]; then
  echo "❌ 缺少 .env.production 文件"
  echo "   请先执行: cp .env.production.example .env.production 并填写配置"
  exit 1
fi

# 3. 构建镜像
echo "🔨 构建 Docker 镜像..."
docker build -t $IMAGE_NAME .

# 4. 停止并删除旧容器
if docker ps -a --format '{{.Names}}' | grep -q "^$APP_NAME$"; then
  echo "🛑 停止旧容器..."
  docker stop $APP_NAME
  docker rm $APP_NAME
fi

# 5. 启动新容器
echo "▶️  启动新容器..."
docker run -d \
  --name $APP_NAME \
  -p $PORT:3000 \
  --env-file .env.production \
  --restart unless-stopped \
  $IMAGE_NAME

# 6. 等待启动
echo "⏳ 等待应用启动..."
sleep 3

# 7. 健康检查
if curl -sf http://localhost:$PORT > /dev/null; then
  echo "✅ 部署成功！应用运行在 http://localhost:$PORT"
else
  echo "⚠️  应用可能还在启动中，查看日志: docker logs $APP_NAME"
fi
