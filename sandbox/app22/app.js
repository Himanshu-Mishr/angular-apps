angular.module("godview-ui", ["ngMaterial"]);

angular.module("godview-ui")
	.controller("mainController", ["$scope", mainController]);


function mainController($scope) {
	$scope.name = "Ganesha";
}
