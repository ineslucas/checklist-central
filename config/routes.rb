Rails.application.routes.draw do
  devise_for :users
  root to: "checklists#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # Show all checklists
  # get '/checklists', to: 'checklists#index'

  resources :checklists, only: [:index, :new, :create, :show, :destroy, :edit, :update] do
    resources :tasks, only: [:new, :create, :edit, :update, :destroy, :show] do # only missing index
    # In contrast, a collection route acts on the entire collection of resources, rather than on a specific member. For example, a new or index action in a controller usually acts on the entire collection of resources, rather than a specific member of that collection.
      member do
        patch :completed
      end
    end
  end
end
