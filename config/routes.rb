Rails.application.routes.draw do
  root 'home#home'

  resources :api, only: [:index, :create]

  get '/404', to: 'home#e404'

  # format: false so that any extensions aren't treated as Content-Type and entire route is sent to Vue
  get "/*path", to: "home#home", format: false
end
