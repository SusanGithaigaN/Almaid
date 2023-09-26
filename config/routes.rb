Rails.application.routes.draw do
  resources :admins

  # add cookies route
  get '/cookies', to: 'sessions#index'

  # # get all users
  # get '/users', to: 'users#index'
  # # create users
  # post '/users', to: 'users#create'
  resources :users, only: [:index, :create, :destroy]

  # show users
  get '/profile', to: 'users#show'

  # get all cleaners
  get '/cleaners', to: 'cleaners#index'

  # add cleaners
  post '/cleaners', to: 'cleaners#create'

  # delete cleaners
  delete '/cleaners/:id', to: 'cleaners#destroy'

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
  
  # Admin
  
  
  # login
  post '/login', to: 'sessions#create'

  # logout
  delete '/logout', to: 'sessions#destroy'
 

end
