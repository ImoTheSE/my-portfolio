# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3001', 'https://your-vercel-url.vercel.app'

    resource '*',
             headers: :any,
             methods: %i[get post options delete put patch],
             credentials: true
  end
end
