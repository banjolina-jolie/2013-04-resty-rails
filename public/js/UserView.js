var UserView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td> <%= name %> </td><td>( <%= email %> )</td>'),

  events: {
    'click': function(){
      this.model.showProfile();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});