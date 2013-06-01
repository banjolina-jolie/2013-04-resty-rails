var UserView = Backbone.View.extend({

  tagName: 'tr',

  // template = _.template('<td>( <%=name )</td>')

  render: function(){
    this.$el.html("UserView");
  }

});