FROM node:20

WORKDIR /workspace/frontend

COPY package*.json ./

# アプリケーションの全ファイルをコピー
COPY . .

RUN npm install --legacy-peer-deps

EXPOSE 3001

# CMDなどが別で設定されていれば不要
