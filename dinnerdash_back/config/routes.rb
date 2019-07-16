Rails.application.routes.draw do
  get 'meal/create'
  get 'meal/show'
  get 'meal/index'
  get 'meal/update'
  get 'meal/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/meal_categories', to: 'meal_categories#index'
  get '/meal_categories/:id', to: 'meal_categories#show'
  post '/meal_categories', to: 'meal_categories#create'
  put '/meal_categories/:id', to: 'meal_categories#update'
  delete '/meal_categories/:id', to: 'meal_categories#destroy'

#Rotas para Orders
 get '/orders/index', to: 'orders#index'
 get '/orders/show/:id', to: 'orders#show'
 post '/orders/create', to: 'orders#create'
 put '/orders/update/:id', to: 'orders#update'
 delete '/orders/destroy/:id', to: 'orders#destroy'

  #Rotas para Users
  get "/users" => "users#index"
  get "/users/:id" => "users#show"
  get "/users/search/:q" => "users#search"

  post "/users" => "users#create"
  post "/users/new" => "users#new"
  post "/users/login" => "users#login"

  put "/users" => "users#update"

  delete "/users" => "users#destroy"
  delete "/users/logout" => "users#logout"
  delete "/users/:id" => "users#remove"
end
