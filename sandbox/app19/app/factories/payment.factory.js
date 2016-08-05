(function(){
	'use strict';

	angular.module('app.factoryLibraries')
		.factory('paymentLib', paymentLib);

	function paymentLib() {
		return {

			getCredit : function(id) {

			},

			setCredit: function(id, credit) {

			},

			getPaymentInfo: function(id, paymentID) {

			}

		}
	}

})();