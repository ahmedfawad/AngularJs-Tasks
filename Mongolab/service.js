

app.factory('userservice',['$http','$q',function($http , $q){

return {
    
        createUser: function (user) {
            console.log(user);

            return $http({
                method : "POST",
                url : "https://api.mlab.com/api/1/databases/task/collections/my-coll?apiKey=EMiUzOwnHY2IxxLAOfYngQiTvQY5BXR6",
                data: JSON.stringify(user),
                contentType: "application/json"
            }).then(
                function(response){
                return response.data;
                console.log('User created - in factory')
                 },
                function(errResponse){
                console.error('Error while creating user');
                return $q.reject(errResponse);
                 }
            
            );
            
        },
    
    updateUser: function (user,id) {

        return $http({
            method : "PUT",
            url : "https://api.mlab.com/api/1/databases/task/collections/my-coll/"+id +"?apiKey=EMiUzOwnHY2IxxLAOfYngQiTvQY5BXR6",
            data: JSON.stringify(user),
            contentType: "application/json"
        }).then(
            function (response) {
                return response.data;
            },
            function (error) {
                console.log('Error While Updating User')
                $q.defer(error);
            }


        );
    },
    
    deleteUser: function(eid) {
        var id=eid;
        return $http.delete("https://api.mlab.com/api/1/databases/task/collections/my-coll/"+id +"?apiKey=EMiUzOwnHY2IxxLAOfYngQiTvQY5BXR6")
        .then(
            function (response) {
                return response.data;
            },
            function (error) {
                console.log('Error While deleting User');
                $q.reject(error);

            }
        );
        
        
        
    },
    
    getUsers: function () {

        return $http.get("https://api.mlab.com/api/1/databases/task/collections/my-coll?apiKey=EMiUzOwnHY2IxxLAOfYngQiTvQY5BXR6")
        .then(
            function (response) {
                return response.data;
                console.log('Response');
            },
            function(error)
            {
                console.log('Error in Getting Users')
                return $q.reject(error);
            }

        );
        
    }

    

}; // return end


}]);








