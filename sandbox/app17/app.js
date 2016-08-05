/*
	service : serverCaller
	service : dataManager
	controller : mainController
 */

angular.module('myApp', ['ngMaterial', 'ngMessages',])

	.factory('getData', ['$timeout', '$q', getData])

	// .run(function(getData) {
	// 	console.log('Started at: ', new Date());
	// 	var promise = getData()
	// 	.then(function(string){
	// 		console.log(string);
	// 	}, function(error){
	// 		console.error(error);
	// 	})
	// 	.finally(function(){
	// 		console.log('Finished at: ', new Date());
	// 	});
	// })

	.controller('mainController', ['$scope', mainController]);


function serverCaller() {

}

function dataManager() {
	var data = {}
	data.secretMsg = "info - info";
	return data;
}

function mainController($scope) {
	$scope.text = " If this is visible then ";
	$scope.goToThisPage = function(x) {
		$scope.text = x;
	};
}
/*
	Execute some operation and return it as promise
 */
function getData($timeout, $q) {
  return function() {

    var defer = $q.defer()

    // whatever you want to capture
    $timeout(function() {
    	var num = parseInt(Math.random()*10)
    	if(num>5) {
	    	defer.resolve('data received!');
    	} else {
    		defer.reject('Oh no!, an error try again.');
    	}
    }, 1000)

    return defer.promise
  }
}

