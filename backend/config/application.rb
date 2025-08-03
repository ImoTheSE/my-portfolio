require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

# ここで .env を読み込む
# 開発・テスト環境でのみ dotenv を読み込む
if %w[development test].include?(Rails.env)
  require 'dotenv'
  Dotenv::Railtie.load
end


module App
  class Application < Rails::Application
    config.load_defaults 7.1

    config.autoload_lib(ignore: %w(assets tasks))

    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    config.api_only = true
  end
end
