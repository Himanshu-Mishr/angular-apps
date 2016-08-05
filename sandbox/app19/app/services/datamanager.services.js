(function(){
	'use strict';

	angular.module('app.datamanager')
		.service('dashboardDataHandler', dashboardDataHandler)
		.service('leadManagementDataHandler', leadManagementDataHandler)
		.service('paymentDataHandler', paymentDataHandler)
		.service('ticketDataHandler', ticketDataHandler)
		.service('userProfileDataHandler', userProfileDataHandler)
		.service('loggerDataHandler', loggerDataHandler);


		dashboardDataHandler.$inject = ['dashboardAPIHandler'];

		function dashboardDataHandler(dashboardAPIHandler) {

		}


		leadManagementDataHandler.$inject = ['leadManagementAPIHandler'];

		function leadManagementDataHandler(leadManagementAPIHandler) {

		}


		paymentDataHandler.$inject = ['paymentAPIHandler'];

		function paymentDataHandler(paymentAPIHandler) {

		}


		ticketDataHandler.$inject = ['ticketAPIHandler'];

		function ticketDataHandler(ticketAPIHandler) {

		}


		userProfileDataHandler.$inject = ['userProfileAPIHandler'];

		function userProfileDataHandler(userProfileAPIHandler) {

		}


		loggerDataHandler.$inject = ['loggerAPIHandler'];

		function loggerDataHandler(loggerAPIHandler) {

		}

})();