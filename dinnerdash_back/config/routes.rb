Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
#Rotas para OrderMeal
  get '/order_meals/index', to: 'order_meals#index'
  get '/order_meals/show/:id', to: 'order_meals#show'
  post '/order_meals/create', to: 'order_meals#create'
  put '/order_meals/update/:id', to: 'order_meals#update'
  delete '/order_meals/destroy/:id', to: 'order_meals#destroy'  
end
