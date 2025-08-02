class Api::ChatgptController < ApplicationController
  def ask
    inputs = params[:inputs] || []
    from_step = params[:from_step] || "default"

    errors = validate_inputs(inputs, from_step)
    if errors.any?
      render json: { errors: errors }, status: :unprocessable_entity
      return
    end

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

  def validate_inputs(inputs, from_step)
    errors = []

    grouped = inputs.group_by { |i| i['step'] }

    year_level = grouped['s1']&.find { |i| i['key'] == 'yearLevel' }&.dig('value')
    errors << '年度が未入力です' if year_level.blank?
    errors << '年度が四文字を超えてます。' if year_level && year_level.length > 4
    errors << '年度は全角のみ入力可能です' if year_level && year_level =~ /[ -~｡-ﾟ]/

    if ['s6', 's7'].include?(from_step) then
      lang = grouped['s2']&.find { |i| i['key'] == 'programmingLanguage' }&.dig('value')
      errors << 'プログラミング言語が未入力です' if lang.blank?
      errors << 'プログラミング言語が50文字を超えてます。' if lang && lang.length > 50
      errors << 'プログラミング言語は英数字・カンマ・スペースのみ入力可能です' if lang && !(lang =~ /\A[a-zA-Z0-9, ]+\z/)
    end

    if ['s7'].include?(from_step) then
      ide = grouped['s7']&.find { |i| i['key'] == 'IDEname' }&.dig('value')
      errors << 'IDE名が未入力です' if ide.blank?
      errors << 'IDE名が20文字を超えてます。' if ide && ide.length > 20
      errors << 'IDE名は英数字・カンマ・スペースのみ入力可能です' if ide && !(ide =~ /\A[a-zA-Z0-9, ]+\z/)
    end

    return errors
  end

end
