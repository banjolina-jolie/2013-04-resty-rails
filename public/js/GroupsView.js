var GroupsView = Backbone.View.extend({

  tagName: "table",

  initialize: function(){
    this.collection.on('change remove add', function(){
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.attr('id', 'grpTable');

    return this.$el.html('<th>Groups</th>').append(
      this.collection.map(function(group){
        // return user.get('name');
        return new GroupView({model: group}).render();
      })
    );
  }

});