class UsersController < ApplicationController
  # GET /users
  respond_to :json #, :html
  def index
    @users = User.all
    respond_with(@users)
    # render :json => @users
  end

  # GET /users/1
  def show
    @user = User.find(params[:id])
    render :json => @user
  end


  # POST /users
  def create
    puts params
    @user = User.new(params[:user])
    if @user.save
      # head :created
      respond_with @user
    else
      head :status => 400
    end
  end

  # PUT /users/1
  def update
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user])
      head :status => 204
    else
      head :status => 400
    end
  end

  # DELETE /users/1
  def destroy
    if User.find(params[:id]).destroy
      head :status => 204
    end
  end
end
