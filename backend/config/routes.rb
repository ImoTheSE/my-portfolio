Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'auth/login'
      post 'auth/register'
    end
  end

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # APIルーティングの追加
  namespace :api do
    post 'chatgpt', to: 'chatgpt#ask'
  end

  # Defines the root path route ("/")
  # root "posts#index"
end
