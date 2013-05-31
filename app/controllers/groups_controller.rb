class GroupsController < ApplicationController
  # GET /groups
  def index
    @groups = Group.all
    render :json => @groups
  end

  # GET /groups/1
  def show
    @group = Group.find(params[:id])
    render :json => @group
  end


  # POST /groups
  def create
    @group = Group.new(params[:group])
    if @group.save
      head :created
    else
      head :status => 400
    end
  end

  # PUT /groups/1
  def update
    @group = Group.find(params[:id])
    if @group.update_attributes(params[:group])
      head :status => 204
    else
      head :status => 400
    end
  end

  # DELETE /groups/1
  def destroy
    if Group.find(params[:id]).destroy
      head :status => 204
    end
  end
end
