max_threads_count = ENV.fetch("RAILS_MAX_THREADS", 5).to_i
min_threads_count = ENV.fetch("RAILS_MIN_THREADS", max_threads_count).to_i
threads min_threads_count, max_threads_count

workers ENV.fetch("WEB_CONCURRENCY", 1).to_i

worker_timeout 3600 if ENV.fetch("RAILS_ENV", "development") == "development"

port ENV.fetch("PORT", 3000)
environment ENV.fetch("RAILS_ENV", "production")
pidfile ENV.fetch("PIDFILE", "tmp/pids/server.pid")

plugin :tmp_restart
