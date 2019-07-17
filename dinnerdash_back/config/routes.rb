Rails.application.routes.draw do
  get 'meal/create'
  get 'meal/show'
  get 'meal/index'
  get 'meal/update'
  get 'meal/destroy'
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

end
