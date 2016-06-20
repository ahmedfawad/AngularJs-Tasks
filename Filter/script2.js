var app=angular.module('App',[]);

app.filter('name',function(){

    return  function (nam, gender) {

        var newname;
            console.log(gender);
        if (gender == 'Male')
        {
            newname=nam + ' Khan';
        }
       if(gender == 'Female')
        {
            newname= nam + ' Ali'

        }
        return newname;

       /* var parsed=parseInt(input, 10)
        var based=parseInt(base,10);
        if (isNaN(parsed) || isNaN(based))
        {
           return input;
        }
        else
        {
            return parsed.toString(base); // When u provide number to toString it returns the numb
                                          // the number is converted into base provided and in string form
        }*/

    }

});

app.controller('ahmed', function($scope){

    var employees=[
        {name:'Ahmed', gender:'Male'},
        {name:'Faraz' , gender:'Male'},
        {name:'Sania', gender:'Female'}
    ];
$scope.employees=employees;
});