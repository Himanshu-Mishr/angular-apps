/*
STEPS :
	Create a model to bind to
	Create a collection of files
	Consume this event so we can assign the files to  the collection
	Create a method to post it all to the server

 */

angular.module( 'MyApp', [ 'ngMaterial' ])
// Lazy loading of Google Map API
	.service('loadGoogleMapAPI', ['$window', '$q',
    function ( $window, $q ) {

        var deferred = $q.defer();

        // Load Google map API script
        function loadScript() {
            // Use global document since Angular's $document is weak
            var script = document.createElement('script');
            script.src = '//maps.googleapis.com/maps/api/js?libraries=places&callback=initMap';

            document.body.appendChild(script);
        }

        // Script loaded callback, send resolve
        $window.initMap = function () {
            deferred.resolve();
        }

        loadScript();

        return deferred.promise;
    }])
    .directive('uploadfile', function () {
	    return {
	      restrict: 'A',
	      link: function(scope, element) {

	        element.bind('click', function(e) {

	            // angular.element(e.target).siblings('#upload').triggerHandler('click');
	        });
	      }
	    };
	})
    .directive('fileUpload', fileUpload)
	.controller("editFormMain_PLController", ['$rootScope', '$window', 'loadGoogleMapAPI', editFormMain_PLController])
	.controller("editFormSection1_PLController", ['$rootScope', editFormSection1_PLController])
	.controller("editFormSection2_PLController", ['$rootScope', '$q', '$timeout', editFormSection2_PLController])
	.controller("editFormSection3_PLController", ['$rootScope', editFormSection3_PLController])
	.controller("editFormSection4_PLController", ['$rootScope', editFormSection4_PLController])
	.controller("editFormSection5_PLController", ['$rootScope', '$timeout', '$scope', editFormSection5_PLController])
	.controller("editFormSection6_PLController", ['$rootScope', editFormSection6_PLController]);

/*
 * Main Controller for Property Listing
 */
function editFormMain_PLController($rootScope, $window, loadGoogleMapAPI) {

	$rootScope.property = {
		"photo_list": []
	};
	$rootScope.current_stage_no = 1;
	$rootScope.change_stage = function(num) {
		$rootScope.current_stage_no = num;
		if(num == 1) {
			// initMap();
		}
	}

	$rootScope.next_stage = function() {
		$rootScope.current_stage_no += 1;
	}

	$rootScope.previous_stage = function() {
		$rootScope.current_stage_no -= 1;
	}

	loadGoogleMapAPI.then(function() {
		$rootScope.initMap({lat: 12.9570514, lng: 77.5926588});
	});

}

/*
 * Handles map and extracting address and lat, lng out of it.
 */
function editFormSection1_PLController($rootScope) {

	function fillInAddress(place) {
		// Get the place details from the autocomplete object.
		// var place = autocomplete.getPlace();

		var componentForm = {
		  street_number: 'short_name',
		  route: 'long_name',
		  locality: 'long_name',
		  administrative_area_level_1: 'short_name',
		  country: 'long_name',
		  postal_code: 'short_name'
		};

		for (var i = 0; i < place.address_components.length; i++) {
		  var addressType = place.address_components[i].types[0];
		  if (componentForm[addressType]) {
		    var val = place.address_components[i][componentForm[addressType]];
		    // if(addressType == 'street_number') console.log("Street Number : ", val);
		    // else if(addressType == 'route') console.log("Road : ", val);
		    // else if(addressType == 'country') console.log("Country : ", val);
		    // else if(addressType == 'locality') console.log("Locality : ", val);
		    // else if(addressType == 'administrative_area_level_1') console.log("State : ", val);
		    if(addressType == 'postal_code') $rootScope.property.pincode = parseInt(val);
		  }
		}
		// console.log("Place object : ", place);
		// console.log("JSON Stringify : ", JSON.stringify(place));
	    // ------------------------------------------------------------------------

    	$rootScope.$apply(function(){
		    // console.log("Apartment name : ", place.name);
		    $rootScope.property.apartment_name = place.name;
		    // console.log('Address : ', place.formatted_address);
		    $rootScope.property.address = place.formatted_address;
		    // console.log('Latitiude : ', place.geometry.location.lat());
	    	$rootScope.property.latitude = place.geometry.location.lat();
		    // console.log('Longitude : ', place.geometry.location.lng());
	    	$rootScope.property.longitude =  place.geometry.location.lng();
	    	// self.GetSocietyDataFromServer($rootScope.property.apartment_name);
    	});
	}

	function geocodeLatLng(geocoder, latlng) {
	  // var input = document.getElementById('latlng').value;
	  // var latlngStr = input.split(',', 2);
	  // var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
	  geocoder.geocode({'location': latlng}, function(results, status) {
	  	console.log(latlng);
		if (status === google.maps.GeocoderStatus.OK) {
		  if (results[1]) {
			// map.setZoom(11);
			// var marker = new google.maps.Marker({
			//   position: latlng,
			//   map: map
			// });
			fillInAddress(results[0]);
		  } else {
			console.log('No results found');
		  }
		} else {
		  console.log('Geocoder failed due to: ' + status);
		}
	  });
	}

	$rootScope.initMap = function(position) {

		// if position not set then. Bengaluru is center
		var position = {lat: 12.9570514, lng: 77.5926588};
		var zoom = 10;

		var geocoder = new google.maps.Geocoder;

		if(typeof $rootScope.property.latitude == 'undefined' || typeof $rootScope.property.longitude == 'undefined') {
			position = {lat: 12.9570514, lng: 77.5926588};
			zoom = 10;
		} else {
			position = {lat: $rootScope.property.latitude, lng: $rootScope.property.longitude};
			zoom = 17;
		}

		// defining map
		var map = new google.maps.Map(document.getElementById('map'), {
			center: position,
			zoom: zoom
		});

		// set default marker
		var marker = new google.maps.Marker({
			position: position,
			map: map,
			draggable: true,
			animation: google.maps.Animation.DROP,
			title: ''
		});
		marker.setVisible(false); // if already there, then clear
		marker.setVisible(true);  // mark it.

		// input for autocomplete
		var input = /** @type {!HTMLInputElement} */(
		  document.getElementById('pac-input'));

		// autocomplete variable
		var autocomplete = new google.maps.places.Autocomplete(input);

		// binds autocomplete with map. So map and autocomplete are two different thing.
		autocomplete.bindTo('bounds', map);

		google.maps.event.addListener(marker, 'drag', function(evt){
			$rootScope.$apply(function(){
					$rootScope.property.latitude = evt.latLng.lat();
					$rootScope.property.longitude = evt.latLng.lng();
				});
		});

		google.maps.event.addListener(marker, 'dragend', function(evt){
			$rootScope.$apply(function(){
					$rootScope.property.latitude = evt.latLng.lat();
					$rootScope.property.longitude = evt.latLng.lng();
				});
			geocodeLatLng(
				geocoder,
				{
					'lat':$rootScope.property.latitude,
					'lng':$rootScope.property.longitude
				});
		});

	  /*
	   * Map Autocomplete : Result handler function
	   */
	  autocomplete.addListener('place_changed', function() {
		// infowindow.close();
		marker.setVisible(false);
		var place = autocomplete.getPlace();

		fillInAddress(place);

		if (!place.geometry) {
		  window.alert("Autocomplete's returned place contains no geometry");
		  return;
		}

		// If the place has a geometry, then present it on a map.
		if (place.geometry.viewport) {
		  map.fitBounds(place.geometry.viewport);
		} else {
		  map.setCenter(place.geometry.location);
		  map.setZoom(17);  // Why 17? Because it looks good.
		}

		marker.setPosition(place.geometry.location);
		marker.setVisible(true);
	  });
	}
}

/*
 * Handles Tagging PM and owners and Date fields
 */
function editFormSection2_PLController($rootScope, $q, $timeout) {

   var self = this;
    var pendingSearch, cancelSearch = angular.noop;
    var cachedQuery, lastSearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;
    self.querySearch = querySearch;
    self.delayedQuerySearch = delayedQuerySearch;

	if(typeof $rootScope.property.owner_id_list == 'undefined' || $rootScope.property.owner_id_list == null) {
		$rootScope.property.owner_id_list = [];
	}

	if(typeof $rootScope.property.pmanager_id_list == 'undefined' || $rootScope.property.pmanager_id_list == null) {
		$rootScope.property.pmanager_id_list = [];
	}

	// handles date of availability
	if(typeof $rootScope.property.available_date == 'undefined' || $rootScope.property.available_date == null) {
		$rootScope.property.available_date = new Date();
	} else {
		$rootScope.property.available_date = new Date($rootScope.property.available_date);
	}

  /**
     * Search for contacts; use a random delay to simulate a remote call
     */
    function querySearch (criteria) {
      cachedQuery = cachedQuery || criteria;
      return cachedQuery ? self.allContacts.filter(createFilterFor(cachedQuery)) : [];
    }
    /**
     * Async search for contacts
     * Also debounce the queries; since the md-contact-chips does not support this
     */
    function delayedQuerySearch(criteria) {
      cachedQuery = criteria;
      if ( !pendingSearch || !debounceSearch() )  {
        cancelSearch();
        return pendingSearch = $q(function(resolve, reject) {
          // Simulate async search... (after debouncing)
          cancelSearch = reject;
          $timeout(function() {
            resolve( self.querySearch() );
            refreshDebounce();
          }, Math.random() * 0, true)
        });
      }
      return pendingSearch;
    }
    function refreshDebounce() {
      lastSearch = 0;
      pendingSearch = null;
      cancelSearch = angular.noop;
    }
    /**
     * Debounce if querying faster than 300ms
     */
    function debounceSearch() {
      var now = new Date().getMilliseconds();
      lastSearch = lastSearch || now;
      return ((now - lastSearch) < 300);
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
      };
    }
    function loadContacts() {
      var contacts = [
        'Marina Augustine',
        'Oddr Sarno',
        'Nick Giannopoulos',
        'Narayana Garner',
        'Anita Gros',
        'Megan Smith',
        'Tsvetko Metzger',
        'Hector Simek',
        'Some-guy withalongalastaname'
      ];
      return contacts.map(function (c, index) {
        var cParts = c.split(' ');
        var contact = {
          name: c,
          email: cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com',
          image: 'http://lorempixel.com/50/50/people?' + index
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }

}


/*
 * Handles fetching of Amenities
 */
function editFormSection3_PLController($rootScope) {

}


/*
 * Form validation for tenancy terms
 */
function editFormSection4_PLController($rootScope) {

}

/*
 * File upload feature
 */
function editFormSection5_PLController($rootScope, $timeout, $scope) {

	//listen for the file selected event
	$scope.$on("fileSelected", function (event, args) {
		$scope.$apply(function () {
			//add the file object to the scope's files collection
			$rootScope.files.push(args.file);
			$scope.photoUploadGrouper();
		});
	});

	/*
	checkBoxItem : [
		{
			key: photo_name,
			todelete: boolean
		}
	]
	 */
	$scope.checkBoxItem = {};
	$scope.checkBoxItem_PhotoList = {};


	$scope.isObjectEmpty = function (obj) {
	    for(var prop in obj) {
	        if(obj.hasOwnProperty(prop))
	            return false;
	    }

	    return true;
	};

	$scope.isAnyOnRowIsTrue =  function(obj) {
		for(key in obj) {
			if(obj[key]) {
				return true;
			}
		}
		return false;
	};

	$scope.cleanAllCheckBox = function(obj) {
		console.log('checking trueness');
		for(key in obj) {
			obj[key] = false;
		}
	};

	$scope.checkBoxItem_main = false;
	$scope.checkBoxItem_PhotoList_main = false;


	$scope.$watch('checkBoxItem_main', function(){
		// if($scope.checkBoxItem_main === true) {
			$scope.selectAllRow();
		// }
	});

	$scope.$watch('checkBoxItem_PhotoList_main', function(){
		// if($scope.checkBoxItem_PhotoList_main === true) {
			$scope.selectAllRow_PhotoList();
		// }
	});


	$scope.selectAllRow = function() {
		if($scope.checkBoxItem_main) {
				for(key in $scope.photoGroupDataStructure) {
					$scope.checkBoxItem[key] = true;
				}
		}
		else {
			for(key in $scope.photoGroupDataStructure) {
				$scope.checkBoxItem[key] = false;
			}
		}
	}

	$scope.selectAllRow_PhotoList = function() {
		if($scope.checkBoxItem_PhotoList_main) {
			for(key in $scope.photoUploadGroupDataStructure) {
				$scope.checkBoxItem_PhotoList[key] = true;
			}
		} else {
			for(key in $scope.photoUploadGroupDataStructure) {
				$scope.checkBoxItem_PhotoList[key] = false;
			}
		}
	};


	// to be done at inital load
	$scope.buildCheckBoxStructure =  function() {
		$scope.checkBoxItem = {};
		for(key in $scope.photoGroupDataStructure) {
			$scope.checkBoxItem[key] = false;
		}
	}

	$scope.buildCheckBox_PhotoListStructure =  function() {
		$scope.checkBoxItem_PhotoList = {};
		for(key in $scope.photoUploadGroupDataStructure) {
			$scope.checkBoxItem_PhotoList[key] = false;
		}
	}

	$scope.removeThisImageFromFileList = function(key) {
		for(var count = 0; count < 4; count++) {
			for(var i =  0; i < $rootScope.files.length; ++i) {
				if($rootScope.files[i].name.indexOf(key) > -1 ) {
					$rootScope.files.splice(i, 1);
					break;
				}
			}
		}

		// rebuild data structure
		$scope.photoUploadGroupDataStructure = {};
		$scope.photoUploadGrouper();
	};

	$scope.deleteSelectedPhotos = function(obj) {
		for(key in obj) {
			if(obj[key])
				$scope.removeThisImageFromPhotoList(key)
		}
	}

	$scope.deleteSelectedPhotos_PhotoList = function(obj) {
		for(key in obj) {
			if(obj[key])
				$scope.removeThisImageFromFileList(key)
		}
	}


	$scope.photoUploadGrouper = function() {
		var photoURLList = [];

		for (var i = 0; i <  $rootScope.files.length; ++i) {
			photoURLList.push($rootScope.files[i].name);
		}

		for (var i = 0; i < photoURLList.length; ++i) {
			var str = photoURLList[i];  // image4_medium_.webp
			var tempFileCategory =  str.split("_");
			var fileCategory =  tempFileCategory[0];   // image0

			if(typeof $scope.photoUploadGroupDataStructure[fileCategory] == 'undefined') {
				$scope.photoUploadGroupDataStructure[fileCategory] = {
					"thumbnail" : false,
					"medium" 	: false,
					"original"	: false,
					"url"		: ""
				};
			}

			var fileQuality = tempFileCategory[1];

			if($scope.photoUploadGroupDataStructure[fileCategory][fileQuality] === false) {
				$scope.photoUploadGroupDataStructure[fileCategory][fileQuality] = true;
			}

			if($scope.photoUploadGroupDataStructure[fileCategory].url == "") {
				for (var j = 0; j <  $rootScope.files.length; ++j) {
					if($rootScope.files[j].name.indexOf(str) > -1) {
						$scope.photoUploadGroupDataStructure[fileCategory].url = $rootScope.files[j].local_path;
					}
				}
			}
		}
		$scope.buildCheckBox_PhotoListStructure();
	};


	$scope.photoGrouper = function() {
		var photoURLList = [];
		$scope.checkBoxItem_OnServer = [];

		for (var i = 0; i <  $rootScope.property.photo_list.length; ++i) {
			photoURLList.push($rootScope.property.photo_list[i].image_url);
		}

		for (var i = 0; i < photoURLList.length; ++i) {
			var str = photoURLList[i];
			var list =  str.split("/");
			var serverFilename =  list[list.length-1];   // 1460367279033-image0_medium_.webp
			var temp =  serverFilename.split("-");
			var clientFilename =  temp[temp.length - 1]; // image0_medium_.webp
			var tempFileCategory =  clientFilename.split("_");
			var fileCategory =  tempFileCategory[0];   // image0

			if(typeof $scope.photoGroupDataStructure[fileCategory] == 'undefined') {
				$scope.photoGroupDataStructure[fileCategory] = {
					"thumbnail" : false,
					"medium" 	: false,
					"original"	: false,
					"url"		: ""
				};
			}

			var fileQuality = tempFileCategory[1];

			if($scope.photoGroupDataStructure[fileCategory][fileQuality] === false) {
				$scope.photoGroupDataStructure[fileCategory][fileQuality] = true;
			}

			if($scope.photoGroupDataStructure[fileCategory].url == "") {
				$scope.photoGroupDataStructure[fileCategory].url = str;
			}
		}
		// console.groupCollapsed("Photo Group Data Structure");
		// console.log($scope.photoGroupDataStructure);
		// console.groupEnd();
		$scope.buildCheckBoxStructure();
	};

	$scope.removeThisFile = function(index) {
		$rootScope.files.splice(index, 1);
	};


	$scope.removeThisImageFromPhotoList = function(key) {
		for(var count = 0; count < 4; count++) {
			for(var i =  0; i < $rootScope.property.photo_list.length; ++i) {
				if($rootScope.property.photo_list[i].image_url.indexOf(key) > -1 ) {
					$rootScope.property.photo_list.splice(i, 1);
					break;
				}
			}
		}

		// rebuild data structure
		$scope.photoGroupDataStructure = {};
		$scope.photoGrouper();
	};



	$rootScope.files = [];
	$scope.photoGroupDataStructure = {};
	$scope.photoGrouper();
	$scope.photoUploadGroupDataStructure = {};


	$rootScope.openFileDialog = function(){
		$timeout(function() {
	        var el = document.getElementById('fileUploader').click();
        }, 0);
	};
}

/*
 * Verification and Suggestion after filling all details.
 * This will also handles View details of property
 */
function editFormSection6_PLController($rootScope) {

}


/* To read more on this :
http://shazwazza.com/post/uploading-files-and-json-data-in-the-same-request-with-angular-js/
 */
function fileUpload() {
	'use strict';
	return {
		scope: true,        //create a new scope
		link: function (scope, el, attrs) {
			el.bind('change', function (event) {
				var files = event.target.files;
				console.log("Files : ", files);

				for(var j = 0; j < files.length; ++j) {
					files[j].local_path = URL.createObjectURL(event.target.files[j]);
				}

				console.log("Files : ", files);

				//iterate files since 'multiple' may be specified on the element
				for (var i = 0;i<files.length;i++) {
					//emit event upward
					scope.$emit("fileSelected", { file: files[i] });
				}
			});
		}
	};
}





