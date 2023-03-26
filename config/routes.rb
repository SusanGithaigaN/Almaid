Rails.application.routes.draw do
  # add cokkies route
  get '/cookies', to: 'session#index'
end
