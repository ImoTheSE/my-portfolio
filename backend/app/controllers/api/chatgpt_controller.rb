class Api::ChatgptController < ApplicationController

  def ask
    input = params[:input]
    # ↓ DB検索の分岐条件（モック）
    if input == "既知の質問"
      render json: { answer: "これは事前に保存された回答です。" }
    else
      client = OpenaiClient.new
      answer = client.generate_answer(input)
      render json: { answer: answer }
    end
  end
end
