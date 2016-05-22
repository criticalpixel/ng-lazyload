require.config({
	baseUrl: '/',
	urlArgs: 'v=1.0',
	paths: {
		jquery : 'lib/jquery/dist/jquery.min',
        angular: 'lib/angular/angular.min',
        uiRouter: 'lib/angular-ui-router/release/angular-ui-router.min',
        ocLazyLoad: 'lib/oclazyload/dist/ocLazyLoad.require.min',
        uiRouterDecorator: 'app/modules/uiRouterDecorator',
        application: 'app/modules/app',
        restAngular: 'lib/restangular/dist/restangular.min',
        AppController : 'app/controllers/AppController'  
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'jquery' : {
			exports : '$'
		},
		'application': ['angular'],
		'uiRouter': ['angular'],
  		'restAngular' : ['angular'],
  		'ocLazyLoad' : ['angular', 'uiRouterDecorator']
	}
});

require([
	'angular',
	'application',
	'uiRouter',
	'ocLazyLoad',
	'restAngular',
	'AppController'
], function(angular) {
	'use strict';
	angular.bootstrap(document, ['app']);
});