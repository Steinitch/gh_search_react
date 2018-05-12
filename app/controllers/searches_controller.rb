class SearchesController < ApplicationController
  def index
    @response ||= {}
    @response['items'] = []
  end

  def create
    query = params[:query]
    @response = HTTParty.get("https://api.github.com/search/repositories?q=#{query}&sort=stars&order=desc")

    render action: "index", response: @response
  end
end
