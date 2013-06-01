var UsersView = Backbone.View.extend({

  tagName: "table",

  initialize: function(){
    this.collection.on('remove', function(){
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();

    return this.$el.html('<th>Users</th>').append(
      this.collection.fetch());
  }

});