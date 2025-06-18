FROM ruby:3.4.4

# 必要なライブラリをインストール（nodejsとpostgresクライアント）
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client libpq-dev iproute2

# 環境変数設定：Gemのインストール先を明示的にする
ENV GEM_HOME=/usr/local/bundle \
    PATH=/usr/local/bundle/bin:$PATH

WORKDIR /workspace/backend

# bundlerを明示的にインストール（バージョンはrails newで生成されたものと合わせると安全）
RUN gem install bundler -v 2.5.6

# Gemfileだけ先にコピーしてbundle install（キャッシュ活用）
COPY Gemfile Gemfile.lock ./
RUN bundle install

# アプリ全体をコピー
COPY . .

EXPOSE 3000 1234
