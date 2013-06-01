var UsersView = Backbone.View.extend({

  tagName: "table",

  initialize: function(){
    this.collection.on('change remove add', function(){
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();
    console.log("this.collection.responseText: ", this.collection);

    return this.$el.html('<th>Users</th>').append(
      this.collection.map(function(user){
        return user.get('name');
      })
    );
  }

});