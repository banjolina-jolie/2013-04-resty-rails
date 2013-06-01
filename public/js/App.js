var App = Backbone.Model.extend({

  initialize: function(params){
    if(params.userList){
      params.userList.fetch();
    }
  }

});