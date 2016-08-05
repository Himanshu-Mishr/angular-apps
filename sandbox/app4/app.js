angular.module('MyApp', ['ngMaterial'])
.controller('AppCtrl', function($scope, $mdDialog, $mdMedia) {
  $scope.status = '  ';
  $scope.init = function(obj) {
    $scope.owner = obj;
  }
  // $scope.owner = {'name':'name1', 'email':'someemail1@gmail.com'};
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
  $scope.showAdvanced = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen,
      locals: {
      	owner_data: $scope.owner
      }
    })
    .then(function(answer) {
      // $scope.status = 'You said the information was "' + answer + '".';
      console.log(answer);
      $scope.status = answer;
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };
});
function DialogController($scope, $mdDialog, owner_data) {
	$scope.owner_data = owner_data;

  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
  	$scope.owner_data = angular.copy(answer);
  	console.log(answer);
    $mdDialog.hide(answer);
  };
}