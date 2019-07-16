Rails.application.routes.draw do

#Rotas para Meal  
  post 'meal/create', to: 'meal#create'
  get 'meal/show' , to: 'meal#show'
  get 'meal/index', to: 'meal#index'
  put 'meal/update', to: 'meal#update'
  delete 'meal/destroy', to: 'meal#destroy'
  
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
