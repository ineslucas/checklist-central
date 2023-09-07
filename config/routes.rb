Rails.application.routes.draw do
  devise_for :users
  root to: "checklists#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # Show all checklists
  # get '/checklists', to: 'checklists#index'

  resources :checklists, only: [:index, :new, :create, :show]
end
