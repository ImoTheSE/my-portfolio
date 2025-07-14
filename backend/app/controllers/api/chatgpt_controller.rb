class Api::ChatgptController < ApplicationController
  def ask
    inputs = params[:inputs] || []
    from_step = params[:from_step] || "default"

    # 質問文生成（前回のロジックと同じ）
    input_hash = inputs.index_by { |i| i['key'] }
    template_config = YAML.load_file(Rails.root.join("config/prompts/template.yml"))
    template = template_config.dig('templates', from_step) || template_config['default']
    user_input = template.gsub(/\{\{(\w+)\}\}/) { input_hash[$1]&.dig('value') || "(未入力)" }

    # 質問文がDBにあれば再利用
    cached = QuestionAnswer.find_by(question: user_input)

    if cached.present?
      render json: { answer: cached.answer }
    else
      # なければChatGPTへ
      client = OpenaiClient.new
      answer = client.generate_answer(user_input)

      # DBに保存（バリデーション込み）
      QuestionAnswer.create(question: user_input, answer: answer)

      render json: { answer: answer }
    end
  end
end
