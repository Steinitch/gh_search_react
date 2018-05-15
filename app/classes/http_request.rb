class HttpRequest
  include HTTParty

  attr_accessor :query

  def initialize(query)
    @query = query
  end

  def search_github
    HTTParty.get("https://api.github.com/search/repositories?q=#{query}&language:ruby&sort=stars&order=desc&per_page=5")
  end
end
