(function(){
	'use strict';

	angular.module('app.apimanager')
		.service('dashboardAPIHandler', dashboardAPIHandler)
		.service('leadManagementAPIHandler', leadManagementAPIHandler)
		.service('paymentAPIHandler', paymentAPIHandler)
		.service('ticketAPIHandler', ticketAPIHandler)
		.service('userProfileAPIHandler', userProfileAPIHandler)
		.service('loggerAPIHandler', loggerAPIHandler);

		dashboardAPIHandler.$inject = ['$http'];

		function dashboardAPIHandler($http) {

		}


		leadManagementAPIHandler.$inject = ['$http'];

		function leadManagementAPIHandler($http) {

		}


		paymentAPIHandler.$inject = ['$http'];

		function paymentAPIHandler($http) {

		}


		ticketAPIHandler.$inject = ['$http'];

		function ticketAPIHandler($http) {

		}


		userProfileAPIHandler.$inject = ['$http'];

		function userProfileAPIHandler($http) {

		}


		loggerAPIHandler.$inject = ['$http'];

		function loggerAPIHandler($http) {

		}

})();