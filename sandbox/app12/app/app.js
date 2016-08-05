angular.module('appRoot', ['ngMaterial'])
.controller('mainController', ['$scope', mainController]);


function  mainController($scope) {

	$scope.testDate1 =  new Date();   // date
	$scope.testDate2 =  null;         // null
	$scope.testDate3 =  "5/25/2016, 3:17:07 PM";  // string

	$scope.foo =  function(td) {
		return 'This is fix to hide error';
	};


	$scope.ans1 =  $scope.foo($scope.testDate1);
	$scope.ans2 =  $scope.foo($scope.testDate2);
	$scope.ans3 =  $scope.foo($scope.testDate3);

}