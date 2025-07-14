class Api::ChatgptController < ApplicationController
  def ask
    inputs = params[:inputs] || []
    from_step = params[:from_step] || "default"

    # キーから value を取得しやすくする
    input_hash = inputs.index_by { |i| i['key'] }

    # YAMLテンプレート読み込み
    template_config = YAML.load_file(Rails.root.join("config/prompts/template.yml"))
    template = template_config.dig('templates', from_step) || template_config['default']

    # テンプレートに埋め込み
    user_input = template.gsub(/\{\{(\w+)\}\}/) do
      input_hash[$1]&.dig('value') || "(未入力)"
    end

    # ChatGPTへ
    client = OpenaiClient.new
    answer = client.generate_answer(user_input)
    render json: { answer: answer }
  end
end
