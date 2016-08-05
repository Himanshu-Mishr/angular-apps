angular.module('dialogDemo', ['ngMaterial'])
  .controller('AppCtrl', function($mdDialog, $log, $scope, $q, $timeout) {
    var self = this;

        self.login = function ($event) {
            $mdDialog.show({
                controller: 'dialogCtrl',
                controllerAs: 'lc',
                templateUrl: 'loginDialog.tmpl.html'
            });
        };

        self.login();

  })
  .controller('dialogCtrl', function($scope, $log) {
    var self = this;
    self.show_form = 'login';

    self.showRegister = function() {
      self.show_form = 'register';
      console.log('show register');
    };

    self.showLogin = function() {
      self.show_form = 'login';
      console.log('show login');
    };

    self.login = function() {
    	console.log();
    };
  });