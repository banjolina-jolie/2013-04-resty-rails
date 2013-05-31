class StatusesController < ApplicationController
  # GET /statuses
  def index
    @statuses = Status.all
    render :json => @statuses
  end

  # GET /statuses/1
  def show
    @status = Status.find(params[:id])
    render :json => @status
  end


  # POST /statuses
  def create
    @status = Status.new(params[:status])
    if @status.save
      head :created
    else
      head :status => 400
    end
  end

  # PUT /statuses/1
  def update
    @status = Status.find(params[:id])
    if @status.update_attributes(params[:status])
      head :status => 204
    else
      head :status => 400
    end
  end

  # DELETE /statuses/1
  def destroy
    if Status.find(params[:id]).destroy
      head :status => 204
    end
  end
end
