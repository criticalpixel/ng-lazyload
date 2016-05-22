define(['angular'], function (angular) {
  var login = angular.module('login', ['']);

  login.controller('LoginController', function ($scope) {
   
	$scope.bar = "LOGIN PAGE";
	console.log("Login Controller");

  });
});