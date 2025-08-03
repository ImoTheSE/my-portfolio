Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'auth/login'
      post 'auth/register'
      delete 'auth/:username', to: 'auth#destroy_by_username'

      resources :question_answers, only: [:index, :destroy]
    end

    # chatgptエンドポイントはv1の外で定義されている（そのままでOK）
    post 'chatgpt', to: 'chatgpt#ask'
  end

  get "up" => "rails/health#show", as: :rails_health_check

  root to: proc { [200, {}, ['API is up']] }

end
