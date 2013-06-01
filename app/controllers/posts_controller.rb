class PostsController < ApplicationController
  # GET /posts
  def index
    @posts = Post.all
    # render :json => @posts
    respond_with(@posts)
  end

  # GET /posts/1
  def show
    @post = Post.find(params[:id])
    render :json => @post
  end


  # POST /posts
  def create
    @post = Post.new(params[:post])
    if @post.save
      # head :created
      respond_with @group
    else
      head :status => 400
    end
  end

  # PUT /posts/1
  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(params[:post])
      head :status => 204
    else
      head :status => 400
    end
  end

  # DELETE /posts/1
  def destroy
    if Post.find(params[:id]).destroy
      head :status => 204
    end
  end
end
