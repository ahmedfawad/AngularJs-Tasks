var app=angular.module('App',[]);

app.controller('ahmed', function($scope,userservice)
{
    $scope.name=userservice.speak('fawad');
});

app.controller('fawad', function($scope,userfactory)
{
    $scope.name=userfactory.speak('fawad');
});


