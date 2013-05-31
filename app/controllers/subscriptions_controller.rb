class SubscriptionsController < ApplicationController
  # GET /subscriptions
  def index
    @subscriptions = Subscription.all
    render :json => @subscriptions
  end

  # GET /subscriptions/1
  def show
    @subscription = Subscription.find(params[:id])
    render :json => @subscription
  end


  # POST /subscriptions
  def create
    @subscription = Subscription.new(params[:subscription])
    if @subscription.save
      head :created
    else
      head :status => 400
    end
  end

  # PUT /subscriptions/1
  def update
    @subscription = Subscription.find(params[:id])
    if @subscription.update_attributes(params[:subscription])
      head :status => 204
    else
      head :status => 400
    end
  end

  # DELETE /subscriptions/1
  def destroy
    if Subscription.find(params[:id]).destroy
      head :status => 204
    end
  end
end
