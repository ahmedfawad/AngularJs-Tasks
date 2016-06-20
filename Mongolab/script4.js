var app = angular.module('App',[]);

app.controller('ahmed',['$scope', 'userservice', function ($scope,userservice,$route) {

    var self=this;
    self.user={
         iduser:null,
         name:'',
          phone:'',
          city:'',
          country:'',
          hobby:''

    };
    self.users=[];

    self.getUsers = function(){
        console.log('in Get Function');
        userservice.getUsers()
            .then(
                function(d) {
                    self.users = d;
                    console.log(self.users)
                },
                function(errResponse){
                    console.error('Error while fetching Users');
                }
            );
    };

    self.deleteUser= function(eid){
        console.log(eid);
        userservice.deleteUser(eid)
         .then(
             function () {
                 alert('User Deleted');
                 self.getUsers();

             } ,

         function(errResponse){
             console.error('Error while deleting User');
         }
         );
    };

    self.edit= function(eid) {
        console.log(eid);
        console.log(self.users.length);
        for (var i = 0; i < self.users.length; i++) {
            if (self.users[i]._id.$oid === eid) {
                self.user = angular.copy(self.users[i]);
                self.user.iduser=3;
                break;
            }
        }
    };

    self.updateUser= function(user,eid) {
        console.log('in update func');

            console.log(eid);
             userservice.updateUser(user,eid)
            .then(
                function() {
                    alert('User Updated');
                    self.getUsers();
                },

                function(errResponse){
                    console.error('Error while deleting User');
                }
            );
    };


    self.createUser = function(user){
        console.log('in create function');
        userservice.createUser(user)

            .then(
                function() {
                   // $route.reload();
                    self.getUsers();
                    alert(' New User Created!!');
                },
                function(errResponse){
                    console.error('Error while creating User.');
                }
            );
    };

    self.submit=function(){
        console.log('in submit Function')
        console.log(self.user)
        if(self.user.iduser == null)
        {
            console.log('add')

            self.createUser(self.user);

        }
        else

        {
            console.log('update');
            self.updateUser(self.user,self.user._id.$oid);

        }

    };




    self.getUsers();
}]);