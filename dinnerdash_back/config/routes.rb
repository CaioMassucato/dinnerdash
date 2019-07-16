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

end
