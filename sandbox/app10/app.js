/*
STEPS :
	Create a property to bind to
	Create a collection of files
	Consume this event so we can assign the files to  the collection
	Create a method to post it all to the server

 */

angular.module( 'MyApp', [ 'ngMaterial' ])
	.controller("MyController", ['$scope', '$http', MyController]);


function MyController($scope, $http) {

}