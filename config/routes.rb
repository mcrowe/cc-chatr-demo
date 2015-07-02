Rails.application.routes.draw do

  root 'home#index'

  # GET /messages
  # => [{'body': 'Message 1'}, {'body': 'Message 2'}, {'body': 'Message 3'}, ...]
  resources :messages

end
