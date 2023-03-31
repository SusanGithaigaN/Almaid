Rails.application.routes.draw do

  # add cookies route
  get '/cookies', to: 'session#index'

  # # get all users
  # get '/users', to: 'users#index'
  # # create users
  # post '/users', to: 'users#create'
  resources :users, only: [:index, :create, :destroy]

  # show users
  get '/profile', to: 'users#show'

  # get all cleaners
  get '/cleaners', to: 'cleaners#index'

  # get all reviews
  get '/reviews', to: 'reviews#index'
  # create reviews
  # post '/reviews', to: 'reviews#create'
  post '/cleaners/:cleaner_id/reviews', to: 'reviews#create'
   # delete reviews
   delete '/reviews/:id', to: 'reviews#delete'

  # get all cleaners and associated reviews
  get '/cleaners/summary', to: 'cleaners#summary'
  
  # book cleaner
  post '/bookings', to: 'bookings#create'
 
  
  # login
  post '/login', to: 'session#create'

  # logout
  delete '/logout', to: 'session#destroy'
  
end
