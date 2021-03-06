angular.module( 'MyApp', [ 'ngMaterial' ] )
    .controller("MyController", ['$scope', function($scope) {
    	'use strict';
        var self =  this;

  //       var placeSearch, autocomplete;
		// var componentForm = {
		//   street_number: 'short_name',
		//   route: 'long_name',
		//   locality: 'long_name',
		//   administrative_area_level_1: 'short_name',
		//   country: 'long_name',
		//   postal_code: 'short_name'
		// };

    var initialGMAP =  function() {
		var placeSearch, autocomplete;
		var componentForm = {
		  street_number: 'short_name',
		  route: 'long_name',
		  locality: 'long_name',
		  administrative_area_level_1: 'short_name',
		  country: 'long_name',
		  postal_code: 'short_name'
		};

		function initAutocomplete() {
		  // Create the autocomplete object, restricting the search to geographical
		  // location types.
		  autocomplete = new google.maps.places.Autocomplete(
		      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
		      {types: ['geocode']});

	      var geolocation = {
		        lat: 12.9570514,
		        lng: 77.5926588
		      };
		      var circle = new google.maps.Circle({
		        center: geolocation,
		        radius: 100000
		      });
		      autocomplete.setBounds(circle.getBounds());



		  // When the user selects an address from the dropdown, populate the address
		  // fields in the form.
		  autocomplete.addListener('place_changed', fillInAddress);
		}

		// [START region_fillform]
		function fillInAddress() {
		  // Get the place details from the autocomplete object.
		  var place = autocomplete.getPlace();

		  for (var component in componentForm) {
		    document.getElementById(component).value = '';
		    document.getElementById(component).disabled = false;
		  }

		  // Get each component of the address from the place details
		  // and fill the corresponding field on the form.
		  for (var i = 0; i < place.address_components.length; i++) {
		    var addressType = place.address_components[i].types[0];
		    if (componentForm[addressType]) {
		      var val = place.address_components[i][componentForm[addressType]];
		      document.getElementById(addressType).value = val;
		    }
		  }
		}
		initAutocomplete();
    };

    setTimeout(initialGMAP, 2000);



    }]);