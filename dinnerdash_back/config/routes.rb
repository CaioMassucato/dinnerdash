Rails.application.routes.draw do
  get 'meal/create', to: 'meal#create'
  get 'meal/show' , to: 'meal#create'
  get 'meal/index', to: 'meal#create'
  get 'meal/update', to: 'meal#create'
  get 'meal/destroy', to: 'meal#create'
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
end
