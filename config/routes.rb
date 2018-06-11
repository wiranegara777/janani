Rails.application.routes.draw do
  get 'dashboard/index'

  ##set standard REST resources
  resources :products

  ##set roor for index page
  root 'products#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
