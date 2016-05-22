define(['application'], function (app) {
  app.controller('AppController', function () {
    var self = this;
	self.bar = "foo";
	console.log("AppController");
  });
});