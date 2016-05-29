  define(['angular'], function (angular) {
  var app = angular.module('app', ['angular-loading-bar', 'LocalStorageModule', 'ui.router', 'oc.lazyLoad', 'uiRouterDecorator', 'ngMaterial', 'ngMessages']);

  app.run(['authService', function (authService) {
      authService.fillAuthData();
  }]);

  app.config(function($httpProvider, $stateProvider, $locationProvider, $ocLazyLoadProvider) {
    
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
        controller: 'MainController',
        controllerAs : 'main'
      })
      .state('login', {
        url: "/login",
        lazyModule: 'login',
        lazyFiles: ['/app/controllers/LoginController.js'],
        templateUrl: '/app/views/login.html',
        controller: 'LoginController',
        controllerAs : 'login'
      });
    
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptorService');
  });

  app.factory('authService', ['$http', '$q', 'localStorageService', '$location', function ($http, $q, localStorageService, $location) {

    var serviceBase = ''; //'http://localhost:50486/';
    var authServiceFactory = {};

    var _authentication = {
        isAuth: false,
        userName: ""
    };

    var _saveRegistration = function (registration) {

        _logOut();

        return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
            return response;
        });

    };

    var _login = function (email,pwd) {

        var data = "grant_type=password&username=" + email + "&password=" + pwd;

        var deferred = $q.defer();

        $http.post(serviceBase + 'oauth/token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

            localStorageService.set('authorizationData', { token: response.access_token, userName: email });

            _authentication.isAuth = true;
            _authentication.userName = email;

            deferred.resolve(response);

        }).error(function (err, status) {
            _logOut();
            deferred.reject(err);
        });

        return deferred.promise;

    };

    var _logOut = function () {

        localStorageService.remove('authorizationData');

        _authentication.isAuth = false;
        _authentication.userName = "";
        console.log("logged out");

    };

    var _fillAuthData = function () {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            _authentication.isAuth = true;
            _authentication.userName = authData.userName;
            if($location.path() == "/login"){
              $location.path('/');
            }
        }

    };

    authServiceFactory.saveRegistration = _saveRegistration;
    authServiceFactory.login = _login;
    authServiceFactory.logOut = _logOut;
    authServiceFactory.fillAuthData = _fillAuthData;
    authServiceFactory.authentication = _authentication;

    return authServiceFactory;
  }]);

  app.factory('authInterceptorService', ['$q', '$location', 'localStorageService', function ($q, $location, localStorageService) {

    var authInterceptorServiceFactory = {};

    var _request = function (config) {
        config.headers = config.headers || {};
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        }

        return config;
    };

    var _responseError = function (rejection) {
        if (rejection.status === 401) {
            $location.path('/login');
        }
        return $q.reject(rejection);
    };

    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;

    return authInterceptorServiceFactory;
  }]);

  return app;
  
});
