class AddUniqueIndexToQuestionAnswers < ActiveRecord::Migration[7.1]
  def change
    add_index :question_answers, :question, unique: true
  end
end
