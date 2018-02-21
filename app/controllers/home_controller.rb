class HomeController < ApplicationController
  def home
    puts "Hello World"
  end

  def e404
    raise ActionController::RoutingError.new('Not Found')
  end
end
