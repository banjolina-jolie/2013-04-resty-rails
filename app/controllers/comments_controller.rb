class CommentsController < ApplicationController
  # GET /comments
  def index
    @comments = Comment.all
    render :json => @comments
  end

  # GET /comments/1
  def show
    @comment = Comment.find(params[:id])
    render :json => @comment
  end


  # POST /comments
  def create
    @comment = Comment.new(params[:comment])
    if @comment.save
      head :created
    else
      head :status => 400
    end
  end

  # PUT /comments/1
  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(params[:comment])
      head :status => 204
    else
      head :status => 400
    end
  end

  # DELETE /comments/1
  def destroy
    if Comment.find(params[:id]).destroy
      head :status => 204
    end
  end
end
