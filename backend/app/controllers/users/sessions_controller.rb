# app/controllers/users/sessions_controller.rb
class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  #デバッグ
  binding.break
  #デバッグ

  def respond_with(resource, _opts = {})
    render json: {
      message: 'ログイン成功',
      user: resource
    }, status: :ok
  end

  def respond_to_on_destroy
    render json: { message: 'ログアウトしました' }, status: :ok
  end
end

