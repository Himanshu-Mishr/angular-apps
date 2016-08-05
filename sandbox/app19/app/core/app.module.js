(function(){
	'use strict';


	// module setter definitions

	angular.module('app', [

		'app.core',
		'app.config',

		/* feature areas */
		'app.dashboard',
		'app.customers'
	]);

	 // shared modules
	angular.module('app.core', [
		/* 3rd party */
		'ngAnimate',

		/* required by all modules */
		'app.router',
		'app.logger'
	]);

	// set of configuration for app
	angular.module('app.config', []);

	/*

		Data layer

	 */
	 // manages data
	angular.module('app.apimanager', []);

	 // send and recevice request and response
	angular.module('app.datamanager', [
		'app.apimanager'
	])


	/*
		Cross Module
	 */
	 // router for application
	angular.module('app.router', ['ngRoute']);

	 // helper for logging
	angular.module('app.logger', []);

	/*
		Presentation layer containing Controller-View pair
	*/
	 // Dashboard Module
	angular.module('app.dashboard', [
		'app.core',
		'app.datamanager',
		'app.factoryLibraries',
		'app.filters'
	]);

	 // Customers module
	angular.module('app.customers', [
		'app.core',
		'app.datamanager',
		'app.factoryLibraries',
		'app.filters'
	]);


	/*
		Domain Layer
	*/
	 // reusable web components : directives
	angular.module('app.components', []);

	 // domain layer : contains libraries of reusable factories
	angular.module('app.factoryLibraries', []);

	 // custom filters libraries
	angular.module('app.filters', []);

})();