Rails.application.routes.draw do
  get 'pages/index'
#m new pages#index into our root path for this app
  root 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
