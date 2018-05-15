class SearchesController < ApplicationController
  # before_action :autheticate_user

  def index
    @response ||= {}
    @response['items'] = []
  end

  def create
    query = params[:query]
    @response = HttpRequest.new(query).search_github
    render action: "index", response: @response
  end
end
