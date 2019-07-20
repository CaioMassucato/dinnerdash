Rails.application.routes.draw do

#Rotas para Meal  
  get '/meal', to: 'meal#index'
  get '/meal/:id' , to: 'meal#show'
  post '/meal', to: 'meal#create'
  put '/meal/:id', to: 'meal#update'
  delete '/meal/:id', to: 'meal#destroy'
  
#Rotas para Meal Categories  
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

end
