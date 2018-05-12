class SessionsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create

  def create
    puts auth_hash
    redirect_to searches_path
  end

  def destroy
    reset_session
    redirect_to :root
  end

  private

  def auth_hash
    request.env["omniauth.auth"]
  end
end
