define(['angular'], function (angular) {
  
  var app = angular.module('app', ['ui.router', 'oc.lazyLoad', 'uiRouterDecorator']);
   
  app.config(function($stateProvider, $locationProvider, $ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      loadedModules: ['app'],
      asyncLoader: require
    });
    
    $stateProvider
      .state('home', {
        url: "/",
        lazyModule: 'main',
        lazyFiles: ['/app/controllers/MainController.js'],
        templateUrl: '/app/views/main.html',
        controller: 'MainController'
      })
      .state('login', {
        url: "/login",
        lazyModule: 'login',
        lazyFiles: ['/app/controllers/LoginController.js'],
        templateUrl: '/app/views/login.html',
        controller: 'LoginController'
      });
  
    $locationProvider.html5Mode(true);
  });

  return app;
  
});
