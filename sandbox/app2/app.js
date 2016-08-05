( function() {
	angular.module( 'MyApp', [
	'ngMaterial',
	'md.data.table',
	'MyControllers']
	).
	factory('customerData', function(){
		var factory = {};
		factory.data = [
  {
    "_id": "56a4ed61714c6a6d3d56de38",
    "owner_name": "Hinton Shepherd",
    "phone_number": "+91 (837) 556-2934",
    "email": "hintonshepherd@candecor.com",
    "location": "Varanda Place",
    "bhk": "4 BHK",
    "multiple": false,
    "society": "Reversus",
    "input_source": "cozee.in"
  },
  {
    "_id": "56a4ed61edea1a3a03bbe505",
    "owner_name": "Gross Sweet",
    "phone_number": "+91 (852) 449-2276",
    "email": "grosssweet@reversus.com",
    "location": "Joval Court",
    "bhk": "3 BHK",
    "multiple": false,
    "society": "Xinware",
    "input_source": "brokers"
  },
  {
    "_id": "56a4ed618eaa1305c3071e19",
    "owner_name": "Mcknight Alvarado",
    "phone_number": "+91 (875) 457-3272",
    "email": "mcknightalvarado@xinware.com",
    "location": "Whitty Lane",
    "bhk": "2 BHK",
    "multiple": true,
    "society": "Furnigeer",
    "input_source": "seo"
  },
  {
    "_id": "56a4ed61b3b5c4bff0444116",
    "owner_name": "Sawyer Spence",
    "phone_number": "+91 (816) 424-2169",
    "email": "sawyerspence@furnigeer.com",
    "location": "Schweikerts Walk",
    "bhk": "3 BHK",
    "multiple": true,
    "society": "Ramjob",
    "input_source": "cozee.in"
  },
  {
    "_id": "56a4ed61ee1045e8f3467685",
    "owner_name": "Laurie Snyder",
    "phone_number": "+91 (925) 530-2331",
    "email": "lauriesnyder@ramjob.com",
    "location": "Powers Street",
    "bhk": "4 BHK",
    "multiple": true,
    "society": "Medesign",
    "input_source": "brokers"
  }
];
	return factory;
	});


	angular.module('MyControllers', [])
	.controller('mainController', [ '$scope', 'customerData', function($scope, customerData) {
		var self = this;
		self.customerData = customerData.data;
		self.semaphone = "Start";
	}])
	.controller('subController', [ '$scope','customerData', function($scope, customerData) {
		var self = this;
		self.alist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		self.customerData = customerData.data;
	}]);
})();