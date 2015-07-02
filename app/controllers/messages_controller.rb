class MessagesController < ApplicationController

  def index
    render json: Message.all
  end

  # POST /messages
  #   body=hello
  def create
    Message.create!(body: params[:body])
    head :created
  end

end