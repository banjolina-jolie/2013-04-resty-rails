var CreateUserView = Backbone.View.extend({

  initialize: function(){

  },

  events: {
    'click #newUserBtn': function(){
      var newUser = new User({name: $('#usrNameInput').val(), email: $('#usrEmailInput').val()});
      newUser.save();
      userList.add(newUser);
    }
  },

  tagName: 'div',

  render: function(){
    return this.$el.html("Name<input id='usrNameInput' type='text'>Email<input id='usrEmailInput' type='text'><button id='newUserBtn'>add user</button>");
  }

});