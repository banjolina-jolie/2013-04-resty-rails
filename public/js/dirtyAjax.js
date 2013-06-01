$(document).ready(function(){
        $.ajax({
          url:'http://0.0.0.0:3000/users',
          contentType: 'application/json',
          success: function(data){
            data.forEach(function(user){
              $('#userDisplay').append('<li><a href="users/'+user.id+'"">'+user.name+'</a></li>');
            });
          },
          error: function(){
            console.log('boooo');
          }
        });

      $(function() {
        $('#myForm').submit(function() {
          $.post('/users', $("#myForm").serialize(), function(user){
            $('#userDisplay').append('<li><a href="users/'+user.id+'"">'+user.name+'</a></li>');
            $('#usrNameInput').val('');
            $('#emailInput').val('');
          });
          return false;
        });
      });

        $.ajax({
          url:'http://0.0.0.0:3000/groups',
          contentType: 'application/json',
          success: function(data){
            data.forEach(function(group){
              $('#groupDisplay').append('<li><a href="groups/'+group.id+'"">'+group.name+'</a></li>');
            });
          },
          error: function(){
            console.log('boooo');
          }
        });

      $(function() {
        $('#groupForm').submit(function() {
          $.post('/groups', $("#groupForm").serialize(), function(group){
            $('#groupDisplay').append('<li><a href="groups/'+group.id+'"">'+group.name+'</a></li>');
            $('#grpNameInput').val('');
            $('#mottoInput').val('');
          });
          return false;
        });
      });
});
