var UsersView = Backbone.View.extend({

  tagName: "table",

  initialize: function(){
    this.collection.on('change remove add', function(){
      this.render();
    }, this);

    this.collection.on('showProfile', function(){
      console.log("usersView hit");
    }, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.attr('id', 'usrTable');

    return this.$el.html('<th>Users</th>').append(
      this.collection.map(function(user){
        return new UserView({model: user}).render();
      })
    );
  }

});