class ApiController < ApplicationController
  def index
    render json: {
      a: 1
    }
  end

  def create
    render json: {
      a: 2
    }
  end
end
