class Api::V1::AuthController < ApplicationController
  def login
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      payload = { user_id: user.id, is_admin: user.is_admin }
      token = JWT.encode(payload, Rails.application.secret_key_base)
      render json: { token: token, is_admin: user.is_admin }, status: :ok
    else
      render json: { error: 'Invalid credentials' }, status: :unauthorized
    end
  end

  def register
    user = User.new(
      username: params[:username],
      password: params[:password],
      is_admin: false
    )
    if user.save
      render json: { message: 'User created' }, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy_by_username
    user = User.find_by(username: params[:username])
    if user&.destroy
      head :no_content
    else
      render json: { error: '削除できませんでした' }, status: :unprocessable_entity
    end
  end
end
