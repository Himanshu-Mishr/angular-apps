(function(){
	'use strict';

	angular.module('app.dashboard')
		.controller('MainController', MainController);

	MainController.$inject = ['dashboardDataHandler', 'paymentLib'];

	function MainController(dashboardDataHandler, paymentLib) {

		// vm = view model
		var vm = this;

		vm.text =  "Hello angular. This works"

	}

})();