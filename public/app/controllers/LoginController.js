define(['application'], function (app) {
  var login = angular.module('login', ['']);

  //----------- Controller
  login.controller('LoginController',[ 'authService', '$location', function (authService, $location) {

    //Check if logged in
    if(authService.authentication.isAuth){
        console.log("logged In");
        $location.path('/');
    }

   	var self =  this;
	console.log("Login Controller");
    self.proceed = function(){
        //Proceed to login
        authService.login(self.email,self.password).then(function (response) {
            console.log("logged in");
            $location.path('/');
        },
         function (err) {
             console.log("error");
         });
    };
  }]);

  //----------- Directive
  login.directive('loginForm', function(){
  	return {
		restrict: 'E',
	    templateUrl: '/app/directives/login-form.html'
	};
  });
});