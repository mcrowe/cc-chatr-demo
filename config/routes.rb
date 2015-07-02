Rails.application.routes.draw do

  root 'home#index'

  # GET /messages
  # POST /messages
  # DELETE /messages/5
  resources :messages

end
