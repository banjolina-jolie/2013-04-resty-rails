var User = Backbone.Model.extend({

  urlRoot: '/users',

  showProfile: function(){
    this.trigger('showProfile', this);
  }

});