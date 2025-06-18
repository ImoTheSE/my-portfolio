FROM node:20

WORKDIR /workspace/frontend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001
