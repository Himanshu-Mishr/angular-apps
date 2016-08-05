angular.module( 'MyApp', [ 'ngMaterial' ] )
    .controller('customerController', function($scope) {

      $scope.customer = {
        'name' : "Himanshu Mishra",
        'gender': "Male",
        "comment": "He is cool."
      };

    })
    /*
    shows information about a customer
     */
    .directive("customer", function() {
      return {
        restrict: 'E',
        templateUrl: function(elem, attr) {
          console.log(elem);
            return 'customer' + attr.type + 'Template.html';
        }
      };
    })
    /*
    fetch count to show count of data fetched.
     */
    .directive('fetchCount', function() {
      return {
        restrict: 'M',
        templateUrl: 'countTemplate.html'
      };
    })
    .directive('owner', function() {
      return {
        restrict: 'E',
        scope: {
          item: "=info"
        },
        templateUrl : 'ownerTemplate.html'
      };
    })

    .controller("MyController", ['$scope','$mdDialog', '$mdMedia', MyController]);
function MyController($scope, $mdDialog, $mdMedia) {
	'use strict';
	$scope.itemList =  [
  {
    "_id": "56cc360b0d870f31f64e6818",
    "name": "Whitehead Small",
    "registered": "2014-04-15",
    "stage": 4
  },
  {
    "_id": "56cc360bd39490e0aad935d0",
    "name": "Valerie Young",
    "registered": "2014-11-19",
    "stage": 3
  },
  {
    "_id": "56cc360b25940ba69cdaffad",
    "name": "Manuela Taylor",
    "registered": "2015-10-30",
    "stage": 4
  },
  {
    "_id": "56cc360b96a418640a4d5461",
    "name": "Burke Mack",
    "registered": "2015-04-17",
    "stage": 2
  },
  {
    "_id": "56cc360b3bb4db4dfdece8ea",
    "name": "Frye Newman",
    "registered": "2014-12-01",
    "stage": 2
  },
  {
    "_id": "56cc360b01b31934ccd93e05",
    "name": "Roy Cooper",
    "registered": "2015-10-06",
    "stage": 1
  },
  {
    "_id": "56cc360b9050f0719ec0f134",
    "name": "Reese Blevins",
    "registered": "2015-02-24",
    "stage": 3
  },
  {
    "_id": "56cc360bacb14a3838ad20a5",
    "name": "Franks Richard",
    "registered": "2014-01-02",
    "stage": 1
  },
  {
    "_id": "56cc360bb39818a591e2894a",
    "name": "Marks Fox",
    "registered": "2016-02-16",
    "stage": 3
  },
  {
    "_id": "56cc360b9e2b74a313b70702",
    "name": "Cathleen Greer",
    "registered": "2015-03-13",
    "stage": 3
  },
  {
    "_id": "56cc360bf207831cb78162f5",
    "name": "Adele Snider",
    "registered": "2015-12-28",
    "stage": 3
  },
  {
    "_id": "56cc360b4af82e325f736853",
    "name": "Lisa Eaton",
    "registered": "2015-06-10",
    "stage": 2
  },
  {
    "_id": "56cc360b9beb8df47ecdec6d",
    "name": "Horton Flowers",
    "registered": "2015-06-11",
    "stage": 3
  },
  {
    "_id": "56cc360ba76d36fc86e717b6",
    "name": "Schneider Beard",
    "registered": "2014-10-13",
    "stage": 1
  },
  {
    "_id": "56cc360b9f24c4d5047dafef",
    "name": "Emerson Fuentes",
    "registered": "2015-11-13",
    "stage": 2
  },
  {
    "_id": "56cc360b3eeabe8566e824cd",
    "name": "Claudine Howell",
    "registered": "2015-12-06",
    "stage": 1
  },
  {
    "_id": "56cc360b22bfc02d4d443d8c",
    "name": "Letha Chavez",
    "registered": "2014-03-11",
    "stage": 3
  },
  {
    "_id": "56cc360b028cbc272faf8dd4",
    "name": "Reyna Terrell",
    "registered": "2016-02-17",
    "stage": 2
  },
  {
    "_id": "56cc360b8eb0bf6534a84c08",
    "name": "Corrine Cameron",
    "registered": "2015-05-28",
    "stage": 1
  },
  {
    "_id": "56cc360b4a3d49ffce8c79e1",
    "name": "Sanchez Bridges",
    "registered": "2015-07-26",
    "stage": 1
  },
  {
    "_id": "56cc360bad6502150ca5c10a",
    "name": "Cathryn Schneider",
    "registered": "2014-09-28",
    "stage": 3
  },
  {
    "_id": "56cc360bb3c0f7a9c97a967e",
    "name": "Carmen Bernard",
    "registered": "2014-09-19",
    "stage": 4
  },
  {
    "_id": "56cc360bd8fbf64a0e66627d",
    "name": "Felicia Gordon",
    "registered": "2014-01-20",
    "stage": 1
  },
  {
    "_id": "56cc360ba04b2256204ef0a9",
    "name": "Lesley Barry",
    "registered": "2014-07-13",
    "stage": 1
  },
  {
    "_id": "56cc360bad634dfffebaa088",
    "name": "Joanne Hardy",
    "registered": "2015-11-22",
    "stage": 2
  },
  {
    "_id": "56cc360b77b8ac03da1bd6cb",
    "name": "Ortega Dunlap",
    "registered": "2014-08-07",
    "stage": 2
  },
  {
    "_id": "56cc360bfa78af1532dd495e",
    "name": "Sherman Campos",
    "registered": "2014-05-29",
    "stage": 4
  },
  {
    "_id": "56cc360ba277347c274063e9",
    "name": "Dana Weber",
    "registered": "2015-08-20",
    "stage": 2
  },
  {
    "_id": "56cc360b7a97508b6f8331f4",
    "name": "Shepherd Parsons",
    "registered": "2015-07-21",
    "stage": 2
  },
  {
    "_id": "56cc360b91be501295237bfc",
    "name": "Mcfarland Fowler",
    "registered": "2015-12-25",
    "stage": 3
  },
  {
    "_id": "56cc360bb13f8fa2eb068ecc",
    "name": "Newton King",
    "registered": "2014-03-05",
    "stage": 2
  },
  {
    "_id": "56cc360b35791d603a2864f6",
    "name": "White Harrell",
    "registered": "2015-12-26",
    "stage": 3
  },
  {
    "_id": "56cc360bd6e5115a7b968eb2",
    "name": "Angelia Garza",
    "registered": "2015-07-27",
    "stage": 1
  },
  {
    "_id": "56cc360b0e41e76a62ef0d87",
    "name": "Dona Pope",
    "registered": "2014-11-27",
    "stage": 1
  },
  {
    "_id": "56cc360b632d04c7d5280140",
    "name": "Sally Sears",
    "registered": "2016-02-11",
    "stage": 2
  },
  {
    "_id": "56cc360b987fb61759df1740",
    "name": "Sheri Camacho",
    "registered": "2014-06-12",
    "stage": 3
  },
  {
    "_id": "56cc360b8dd4df36f07a8bb9",
    "name": "Anderson Shepherd",
    "registered": "2015-08-17",
    "stage": 2
  },
  {
    "_id": "56cc360b6aff3c8835f0b5dd",
    "name": "Mclean Holman",
    "registered": "2014-04-16",
    "stage": 3
  },
  {
    "_id": "56cc360b5d02f6a6a7ea342b",
    "name": "Kristin Lee",
    "registered": "2015-01-14",
    "stage": 2
  },
  {
    "_id": "56cc360b370d9d734e9849d4",
    "name": "Marsha Craft",
    "registered": "2014-08-30",
    "stage": 1
  },
  {
    "_id": "56cc360ba662beb58a01df59",
    "name": "Kerr Lowe",
    "registered": "2016-01-25",
    "stage": 2
  },
  {
    "_id": "56cc360b83485e0841fd548e",
    "name": "Marta Bates",
    "registered": "2015-11-14",
    "stage": 3
  },
  {
    "_id": "56cc360b878b2735bd4aa616",
    "name": "Catalina Burnett",
    "registered": "2015-03-04",
    "stage": 2
  },
  {
    "_id": "56cc360be2b75699b8353da4",
    "name": "Morales Daniel",
    "registered": "2016-01-03",
    "stage": 1
  },
  {
    "_id": "56cc360b3a7c415900487bc1",
    "name": "Richards Gutierrez",
    "registered": "2016-02-13",
    "stage": 4
  },
  {
    "_id": "56cc360be397f63d57aed6aa",
    "name": "Sheryl Ingram",
    "registered": "2015-01-15",
    "stage": 3
  },
  {
    "_id": "56cc360bc555e5f8f32b3ef4",
    "name": "Delgado Moran",
    "registered": "2014-10-26",
    "stage": 2
  },
  {
    "_id": "56cc360b47472c5e199f2c3f",
    "name": "Duran Mcneil",
    "registered": "2014-07-01",
    "stage": 4
  },
  {
    "_id": "56cc360b86c864becffee242",
    "name": "Hancock Bray",
    "registered": "2014-09-22",
    "stage": 2
  },
  {
    "_id": "56cc360b7ee19f3817e40708",
    "name": "Park Torres",
    "registered": "2015-07-25",
    "stage": 3
  },
  {
    "_id": "56cc360b357d39408f128311",
    "name": "Baxter Blackburn",
    "registered": "2015-03-24",
    "stage": 3
  },
  {
    "_id": "56cc360bb5af9d0015c53531",
    "name": "Sandy Golden",
    "registered": "2015-08-25",
    "stage": 3
  },
  {
    "_id": "56cc360bc082ffc0286fab16",
    "name": "Meagan Frazier",
    "registered": "2014-11-19",
    "stage": 1
  },
  {
    "_id": "56cc360bf16f2afdb00ffaf8",
    "name": "Walls Leonard",
    "registered": "2015-04-30",
    "stage": 1
  },
  {
    "_id": "56cc360bc6c07a0eb580b114",
    "name": "Leola Slater",
    "registered": "2014-06-05",
    "stage": 3
  },
  {
    "_id": "56cc360bacaa75fed4c6d53a",
    "name": "Alvarado Leach",
    "registered": "2015-10-18",
    "stage": 4
  },
  {
    "_id": "56cc360b97dac1ab927c5b79",
    "name": "Leach Mccall",
    "registered": "2014-07-20",
    "stage": 2
  },
  {
    "_id": "56cc360b93381b32fb4ecea6",
    "name": "April Trevino",
    "registered": "2015-07-29",
    "stage": 2
  },
  {
    "_id": "56cc360bf1312414cea8cdb6",
    "name": "Carol Larsen",
    "registered": "2014-11-05",
    "stage": 1
  },
  {
    "_id": "56cc360b08ec723243bf8169",
    "name": "Giles Daugherty",
    "registered": "2014-11-28",
    "stage": 2
  },
  {
    "_id": "56cc360bf0733153fb751671",
    "name": "Leslie Murray",
    "registered": "2014-05-24",
    "stage": 4
  },
  {
    "_id": "56cc360b46b915d2455be2d5",
    "name": "Jackie Hatfield",
    "registered": "2014-05-10",
    "stage": 4
  },
  {
    "_id": "56cc360bbc5bd5549a3dddf3",
    "name": "Stacie Oconnor",
    "registered": "2014-03-19",
    "stage": 1
  },
  {
    "_id": "56cc360b01dd4831193fc8cf",
    "name": "Hess Potts",
    "registered": "2015-05-20",
    "stage": 3
  },
  {
    "_id": "56cc360b0ccec158de1f6fe3",
    "name": "Graciela Nguyen",
    "registered": "2015-01-30",
    "stage": 4
  },
  {
    "_id": "56cc360b88dc65e2bef43be3",
    "name": "Dunn Kidd",
    "registered": "2014-05-25",
    "stage": 4
  },
  {
    "_id": "56cc360b76367ee9deea632e",
    "name": "Mindy Maynard",
    "registered": "2015-11-15",
    "stage": 2
  },
  {
    "_id": "56cc360be4297500119dc2fd",
    "name": "Sofia Luna",
    "registered": "2015-03-26",
    "stage": 1
  },
  {
    "_id": "56cc360b9d2a8ef40c00f3d0",
    "name": "Allison Simon",
    "registered": "2015-01-19",
    "stage": 3
  },
  {
    "_id": "56cc360b92188f5b4f16fe63",
    "name": "Saunders Orr",
    "registered": "2015-12-18",
    "stage": 3
  },
  {
    "_id": "56cc360be069afd7e10c100a",
    "name": "Rosa Mcbride",
    "registered": "2014-09-05",
    "stage": 1
  },
  {
    "_id": "56cc360b201e127dfcfa803a",
    "name": "Sutton Maxwell",
    "registered": "2014-09-07",
    "stage": 3
  },
  {
    "_id": "56cc360bb18b1cd726bcc348",
    "name": "Swanson Carlson",
    "registered": "2014-04-06",
    "stage": 2
  },
  {
    "_id": "56cc360bad337409ca83c952",
    "name": "Darla Campbell",
    "registered": "2014-08-07",
    "stage": 4
  },
  {
    "_id": "56cc360bd8f1413fde4d629c",
    "name": "Farmer Welch",
    "registered": "2015-12-04",
    "stage": 1
  },
  {
    "_id": "56cc360bcedae7039b70c1c4",
    "name": "Lamb Edwards",
    "registered": "2014-01-20",
    "stage": 2
  },
  {
    "_id": "56cc360b8b2d067f72942d8f",
    "name": "Tania Preston",
    "registered": "2016-02-09",
    "stage": 3
  },
  {
    "_id": "56cc360bd26e62282a262c3e",
    "name": "Aline Carter",
    "registered": "2014-12-09",
    "stage": 1
  },
  {
    "_id": "56cc360bb70f532b2ffaa017",
    "name": "Burris Ross",
    "registered": "2014-10-11",
    "stage": 1
  },
  {
    "_id": "56cc360be975bfde456f8d07",
    "name": "Villarreal Powers",
    "registered": "2014-07-29",
    "stage": 2
  },
  {
    "_id": "56cc360bef173661a9e2dbe2",
    "name": "Alta Baker",
    "registered": "2014-02-25",
    "stage": 2
  },
  {
    "_id": "56cc360baf287aa014d6632a",
    "name": "Mcbride Patel",
    "registered": "2016-02-03",
    "stage": 2
  },
  {
    "_id": "56cc360bba0d4c166ef0e56c",
    "name": "Ilene Rollins",
    "registered": "2014-09-10",
    "stage": 4
  },
  {
    "_id": "56cc360b1a9079bd920c8e70",
    "name": "Francesca Mosley",
    "registered": "2015-09-04",
    "stage": 3
  },
  {
    "_id": "56cc360bb41a1d27fdfce584",
    "name": "Mills Alvarez",
    "registered": "2015-03-08",
    "stage": 2
  }];

	$scope.showAdvanced = function(ev, item) {
	    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
	    $mdDialog.show({
	      controller: DialogController,
	      templateUrl: 'dialog1.tmpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: useFullScreen,
	      resolve: {
	            item_data: function() {
	                return item;
	            }
	        }
	    })
	    .then(function(answer) {
	      $scope.status = 'You said the information was "' + answer + '".';
	    }, function() {
	      $scope.status = 'You cancelled the dialog.';
	    });
	    $scope.$watch(function() {
	      return $mdMedia('xs') || $mdMedia('sm');
	    }, function(wantsFullScreen) {
	      $scope.customFullscreen = (wantsFullScreen === true);
	    });
	  };
}

function DialogController($scope, $mdDialog, item_data) {
	console.log(item_data);
	$scope.item_data =  item_data;
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}