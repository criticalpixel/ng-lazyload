module.exports = function(config){
	config.set({
		basePath: '',
		frameworks : ['jasmine'],
		files : [
			'public/lib/angular/angular.min.js',
			'public/lib/angular-mocks/angular-mocks.js',
			'public/app/modules/app.js',
			'public/tests/*.js'
		],
		exclude : [],
		port : 3000,
		logLevel : config.LOG_INFO,
		autoWatch : true,
		browsers : ['Chrome'],
		singleRun : false
	});
};