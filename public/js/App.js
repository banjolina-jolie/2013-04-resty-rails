var App = Backbone.Model.extend({

  initialize: function(params){

    // console.log(params);

    if(params.userList){
      params.userList.fetch();
    }

    if(params.groupList){
      params.groupList.fetch();
    }

    this.on('showProfile', function(user){
      console.log("user: ", user);
      // this.initialize(user);
    }, this);

  }

});