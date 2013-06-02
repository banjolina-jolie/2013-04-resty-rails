var AppView = Backbone.View.extend({

  initialize: function(){
    this.createUserView = new CreateUserView();
    this.usersView = new UsersView({collection: this.model.get('userList')}).render();
    this.groupsView = new GroupsView({collection: this.model.get('groupList')}).render();
  },

  render: function(){
    return this.$el.html([
      this.usersView, this.groupsView
    ]);
  }

});