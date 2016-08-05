/*
STEPS :
	Create a model to bind to
	Create a collection of files
	Consume this event so we can assign the files to  the collection
	Create a method to post it all to the server

 */

angular.module( 'MyApp', [ 'ngMaterial' ])
    .config(function($mdIconProvider) {
        $mdIconProvider
          .defaultIconSet('img/icons/sets/core-icons.svg', 24);
      })
      .filter('keyboardShortcut', function($window) {
        return function(str) {
          if (!str) return;
          var keys = str.split('-');
          var isOSX = /Mac OS X/.test($window.navigator.userAgent);
          var seperator = (!isOSX || keys.length > 2) ? '+' : '';
          var abbreviations = {
            M: isOSX ? '⌘' : 'Ctrl',
            A: isOSX ? 'Option' : 'Alt',
            S: 'Shift'
          };
          return keys.map(function(key, index) {
            var last = index == keys.length - 1;
            return last ? key : abbreviations[key];
          }).join(seperator);
        };
      })
      .controller('MyController', function DemoCtrl($mdDialog) {
        this.settings = {
          printLayout: true,
          showRuler: true,
          showSpellingSuggestions: true,
          presentationMode: 'edit'
        };
        this.sampleAction = function(name, ev) {
          $mdDialog.show($mdDialog.alert()
            .title(name)
            .textContent('You triggered the "' + name + '" action')
            .ok('Great')
            .targetEvent(ev)
          );
        };
      });