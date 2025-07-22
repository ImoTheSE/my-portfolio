Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'auth/login'
      post 'auth/register'

      resources :question_answers, only: [:index]
    end

    # chatgptエンドポイントはv1の外で定義されている（そのままでOK）
    post 'chatgpt', to: 'chatgpt#ask'
  end

  get "up" => "rails/health#show", as: :rails_health_check

  # root "posts#index"
end
