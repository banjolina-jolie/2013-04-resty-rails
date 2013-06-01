var AppView = Backbone.View.extend({

  initialize: function(){
    this.usersView = new UsersView({collection: this.model.get('userList')}).render();
  },

  render: function(){
    return this.$el.html([
      this.usersView
    ]);
  }

});