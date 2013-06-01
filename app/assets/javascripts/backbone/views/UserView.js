var UserView = Backbone.View.extend({

  initialize: function(){
  },

  render: function(){
    return this.$el.html([
      new UserView({})]);
  }

});