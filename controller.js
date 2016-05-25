var app= angular.module("mainApp",["ngRoute"]);


app.controller("loginCtrl",function($scope,$location){
    $scope.msg="hallllll";
 $scope.submit=function(){

  var uname=$scope.username;
  var password=$scope.password;
  if($scope.username == "admin" && $scope.password=="admin"){
    $location.path("/dashboard");
  } else {
    alert("wrong stuff");
  }
 };
});


      app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            
            when('/', {
               templateUrl: 'login.html'
      
            }).
            
            when('/dashboard', {
               templateUrl: 'dashboard.html'
           
            }).
            
            otherwise({
               redirectTo: '/'
            });
         }]);
