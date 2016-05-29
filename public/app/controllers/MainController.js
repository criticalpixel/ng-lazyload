define(['application'], function (app) {
  var main = angular.module('main', ['']);

  main.controller('MainController', function (authService) {
  	var self = this;
    self.bar = "MAIN PAGE";
    self.logout = function(){
    	authService.logOut();
    };
	console.log("Main Controller");
  });
});