class UsersController < ApplicationController
  before_action :check_login, only: [:index]
  def index
    render json: current_user.to_vue
  end
end
