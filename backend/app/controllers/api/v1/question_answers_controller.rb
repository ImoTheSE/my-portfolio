class Api::V1::QuestionAnswersController < ApplicationController
  def index
    if params[:q].present?
      @results = QuestionAnswer.where("question LIKE ?", "%#{params[:q]}%")
    else
      @results = QuestionAnswer.all
    end

    render json: @results
  end

  def destroy
    question_answer = QuestionAnswer.find(params[:id])
    question_answer.destroy
    head :no_content
  end
end
