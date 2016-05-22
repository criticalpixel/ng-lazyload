define(['angular'], function (angular) {
  var main = angular.module('main', ['']);

  main.controller('MainController', function ($scope) {

    $scope.bar = "MAIN PAGE";
	console.log("Main Controller");
	
  });
});