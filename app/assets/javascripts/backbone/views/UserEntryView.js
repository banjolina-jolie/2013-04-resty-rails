var UserListEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= userName %>)</td>'),

  events: {

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});