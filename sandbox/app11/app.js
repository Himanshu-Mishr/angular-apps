angular.module('MyApp', ['ngMaterial'])
	.controller('main_controller', ['$scope', main_controller])
	.controller('sub1_controller', ['$scope', sub1_controller])
	.controller('sub2_controller', ['$scope', sub2_controller])
	.controller('sub3_controller', ['$scope', sub3_controller]);


function main_controller($scope) {
	$scope.controller_name = 'main_controller';
	$scope.x = 1;
	$scope.main_incr = function() {
		$scope.x += 1;
	};
}


function sub1_controller($scope) {
	$scope.controller_name = 'sub1_controller';
	$scope.sub1_incr = function() {
		$scope.x += 1;
	};
}


function sub2_controller($scope) {
	$scope.controller_name = 'sub2_controller';
	$scope.sub2_incr = function() {
		$scope.x += 1;
	};
}


function sub3_controller($scope) {
	$scope.controller_name = 'sub3_controller';
	$scope.sub3_incr = function() {
		$scope.x += 1;
	};
}




