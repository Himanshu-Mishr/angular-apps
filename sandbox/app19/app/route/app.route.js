(function(){
	'use strict';

	angular.module('app.router')
		.config(routeConfig);

	routeConfig.$inject = ['$routeProvider', '$locationProvider'];

	function routeConfig($routeProvider, $locationProvider) {
	    $routeProvider.

	    when('/',
	      { templateUrl: 'index.html', controller: 'MainController as ctrl'}).

	    otherwise({
	        redirectTo: '/'
	    });

	}

})();