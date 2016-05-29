require.config({
	baseUrl: '/',
	urlArgs: 'v=1.0',
	paths: {
		jquery 			: 'lib/jquery/dist/jquery.min',
        angular 		: 'lib/angular/angular.min',
        application 	: 'app/modules/app',
        uiRouter 		: 'lib/angular-ui-router/release/angular-ui-router.min',
        ocLazyLoad 		: 'lib/oclazyload/dist/ocLazyLoad.require.min',
        routeDecorator	: 'app/modules/uiRouterDecorator',
        ngAnimate 		: 'lib/angular-animate/angular-animate.min',
        ngAria 			: 'lib/angular-aria/angular-aria.min',
        ngMessages 		: 'lib/angular-messages/angular-messages.min',
        ngMaterial 		: 'lib/angular-material/angular-material.min',
        ngLocalStorage 	: 'lib/angular-local-storage/dist/angular-local-storage.min',
        restAngular 	: 'lib/restangular/dist/restangular.min',
        AppController 	: 'app/controllers/AppController',
        ngLoadingBar 	: 'lib/angular-loading-bar/build/loading-bar.min',
        nProgressBar  	: 'res/js/nprogress'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'jquery' : {
			exports : '$'
		},
		'application'	: ['angular'],
		'uiRouter'		: ['angular'],
  		'restAngular' 	: ['angular'],
  		'ngLoadingBar' 	: ['angular'],
  		'ngAnimate'		: ['angular'],
  		'ngAria'		: ['angular'],
  		'ngMessages'	: ['angular'],
  		'ngLocalStorage': ['angular'],
  		'ocLazyLoad' 	: ['angular', 'routeDecorator'],
  		'ngMaterial'	: ['angular', 'ngAnimate', 'ngAria', 'ngMessages' ]
 	}
});
// Preloader - Maybe
require([
	'nProgressBar'
], function(NProgress){
	NProgress.start();
});

require([
	'angular',
	'nProgressBar',
	'application',
	'ngLoadingBar',
	'uiRouter',
	'ocLazyLoad',
	'restAngular',
	'AppController',
	'ngMaterial',
	'ngLocalStorage'
], function(angular,NProgress) {
	'use strict';
	angular.bootstrap(document, ['app']);
	NProgress.done();
});