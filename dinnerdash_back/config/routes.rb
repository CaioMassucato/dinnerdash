Rails.application.routes.draw do
  get 'meal/create', to: 'meal#create'
  get 'meal/show' , to: 'meal#create'
  get 'meal/index', to: 'meal#create'
  get 'meal/update', to: 'meal#create'
  get 'meal/destroy', to: 'meal#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
