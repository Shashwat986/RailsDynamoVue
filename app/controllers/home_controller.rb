class HomeController < ApplicationController
  def home
    puts "Hello World"
  end

  def index
    render json: {
      a: 1
    }
  end
end
