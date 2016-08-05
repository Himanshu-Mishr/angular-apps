(function(){
	'use strict';

	// module getter
	angular.module('app.core')
		.service('coreService', coreService);

	function coreService() {
		this.foo = function() {
			return 'bar';
		};
	}

})();