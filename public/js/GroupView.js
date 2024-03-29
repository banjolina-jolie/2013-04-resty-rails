var GroupView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td> <%= name %> </td><td>( <%= motto %> )</td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});