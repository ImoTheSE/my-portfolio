#!/bin/bash
set -e

# echo "[start.sh] Frontend 起動準備"
# cd frontend && npm install && npm run dev -- --port 3001

echo "[start.sh] Backend 起動準備"
cd backend

echo "[start.sh] ポート3000の使用状況を確認します"
if ss -tuln | grep ':3000' > /dev/null; then
  echo "[start.sh] ポート3000が既に使用中です。PIDファイルの削除をスキップします。"
else
  echo "[start.sh] ポート3000は空いています。PIDファイルを削除します。"
  mkdir -p tmp/pids
  rm -f tmp/pids/server.pid
fi

echo "[start.sh] Rails デバッグ起動"
RUBY_DEBUG_OPEN=true RUBY_DEBUG_PORT=1235 bundle exec rails s -b 0.0.0.0 -p 3000
