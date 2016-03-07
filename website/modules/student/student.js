var app = angular.module('schoolApp', ['app','ngResource', 'ui.router']);

var baseUrl = 'http://localhost\\:3000';

/*app.config(function($stateProvider) {

    $stateProvider
        .state('createstudent', {
            name: 'studentcreate',
            templateUrl: "/modules/student/studentcreate.html",
            controller:'StudentCreateController'
        }).state('students',{
        url:'/modules/student/students.html',
        templateUrl:'/modules/student/students.html',
        controller:'StudentListController'
    });
});
*/
app.factory('Student', function ($resource) {
  return $resource(baseUrl + '/api/students/:id');
});
app.controller('StudentCreateController',['$state', '$scope','Student', function($state,$scope, Student){

 

    $scope.addStudent=function(){
  
        Student.save($scope.student,function(){
            setTimeout(function() {
                      
                        window.location.href = '/modules/student/students.html';
                    }, 1000);


        });
    }

}])
app.controller('StudentListController',function($scope,Student){
	
    $scope.students=Student.query();

})

/*app.config(function($stateProvider,$httpProvider){
    $stateProvider.state('Students',{
        url:'/students',
        templateUrl:'/pages/students.html',
        controller:'StudentListController'
    }).state('newStudent',{
        url:'/student',
        templateUrl:'/pages/student.html',
        controller:'StudentCreateController'
    });
});*/

