Rails.application.routes.draw do
  root 'home#home'

  resources :home, only: [:index]
end
