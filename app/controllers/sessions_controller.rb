class SessionsController < ApplicationController

  def new
    render :layout => false
  end

  def create
    user = User.find_by username: params[:username]
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to :root, notice: "Logged in succesfully! Welcome back "+current_user.to_s+"!"
    else
      redirect_to :back, alert: "Username and/or password mismatch"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to :login, notice: 'Logged out succesfully. Have a nice day!'
  end
end
