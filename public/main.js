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
        AppController : 'app/controllers/AppController',
        ngLoadingBar : 'lib/angular-loading-bar/build/loading-bar.min',
        nProgressBar: 'res/js/nprogress'
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
  		'ngLoadingBar' : ['angular'],
  		'ocLazyLoad' : ['angular', 'uiRouterDecorator']
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
	'AppController'
], function(angular,NProgress) {
	'use strict';
	angular.bootstrap(document, ['app']);
	NProgress.done();
});