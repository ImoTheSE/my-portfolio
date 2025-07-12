require 'openai'
require 'yaml'

class OpenaiClient
  def initialize
    @client = OpenAI::Client.new(access_token: ENV['OPENAI_API_KEY'])
  end

  def generate_answer(user_input)
    # 定型文をYAMLから読み込み
    prompt_template = YAML.load_file(Rails.root.join("config/prompts/template.yml"))

    full_prompt = <<~PROMPT
      #{prompt_template['prefix']}
      #{user_input}
      #{prompt_template['suffix']}
    PROMPT

    response = @client.chat(
      parameters: {
        model: "gpt-4",
        messages: [
          { role: "system", content: "あなたは優秀なアシスタントです。" },
          { role: "user", content: full_prompt }
        ]
      }
    )

    response.dig("choices", 0, "message", "content")
  end
end
