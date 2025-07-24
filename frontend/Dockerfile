FROM node:20

WORKDIR /workspace/frontend

# 依存解決と Tailwind/PostCSS 設定の準備
COPY package*.json ./
COPY tailwind.config.js ./

# アプリケーションの全ファイルをコピー
COPY . .

RUN npm install --legacy-peer-deps

EXPOSE 3001

# CMDなどが別で設定されていれば不要
