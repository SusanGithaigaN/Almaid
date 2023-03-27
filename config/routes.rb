Rails.application.routes.draw do

  # add cookies route
  get '/cookies', to: 'session#index'

  # # get all users
  # get '/users', to: 'users#index'
  # # create users
  # post '/users', to: 'users#create'
  resources :users, only: [:index, :create]

  # show users
  get '/profile', to: 'users#show'
  # login
  post '/login', to: 'session#create'

  # logout
  delete '/logout', to: 'session#destroy'
  
end
