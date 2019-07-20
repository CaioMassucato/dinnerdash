Rails.application.routes.draw do


#Rotas para Meal  
  get '/meal', to: 'meal#index'
  get '/meal/:id' , to: 'meal#show'
  post '/meal', to: 'meal#create'
  put '/meal/:id', to: 'meal#update'
  delete '/meal/:id', to: 'meal#destroy'
  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
#Rotas para OrderMeal
  get '/order_meals/index', to: 'order_meals#index'
  get '/order_meals/show/:id', to: 'order_meals#show'
  post '/order_meals/create', to: 'order_meals#create'
  put '/order_meals/update/:id', to: 'order_meals#update'
  delete '/order_meals/destroy/:id', to: 'order_meals#destroy'  


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
  
  put "/users/login" => "users#login"
  put "/users/logout" => "users#logout"
  put "/users" => "users#update"

  delete "/users" => "users#destroy"
  delete "/users/:id" => "users#remove"

  #Rotas para Situations
  get "/situations" => "situations#index"
  get "/situations/:id" => "situations#show"

  post "/situations" => "situations#create"
  post "/situations/new" => "situations#new"

  put "/situations" => "situations#update"

  delete "/situations" => "situations#destroy"
  delete "/situations/:id" => "situations#remove"
end
