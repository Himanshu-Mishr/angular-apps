/*
STEPS :
	Create a model to bind to
	Create a collection of files
	Consume this event so we can assign the files to  the collection
	Create a method to post it all to the server

 */

angular.module( 'MyApp', [ 'ngMaterial' ])
	.directive('fileUpload', fileUpload)
	.controller("MyController", ['$scope', '$http', MyController]);


function MyController($scope, $http) {
	//a simple model to bind to and send to the server
	$scope.model = {
	"_id"               :  "56ebf576efd9db101acda166",
	"created_date"      :  "test",
    "longitude"         :  12345,
    "pets"              :  false,

    "flat_amenity"      :  {
                            "chimney"           :  false,
                            "cook_top"          :  false
                           },
    "social_amenity"    :  {
                            "badminton_court"   :  false,
                            "play_area"         :  false,
                            "broadband"         :  false
                            },

    "tenancy_terms"     :
                            {
                                society_maintenance_charge      :  12345,
                                rent_payment_model              :  "test",
                            },

    "owner_id"          :   "test",
    "pmanager_id"       :   "test"
	};

	//an array of files selected
	$scope.files = [];

	//listen for the file selected event
	$scope.$on("fileSelected", function (event, args) {
		$scope.$apply(function () {
			//add the file object to the scope's files collection
			$scope.files.push(args.file);
			console.log(args);
		});
	});

	$scope.showFileData = function() {
		console.log($scope.files);

	};

	/*
	 * Remove this files : from files list
	 * @param index : integer
	 */
	$scope.removeThisFile = function(index) {
		$scope.files.splice(index, 1);
	};

   //the save method
	$scope.save = function() {
		$http({
			method: 'POST',
			url: "http://52.74.107.155:3020/alpha/godview/add-property-listing",
			//IMPORTANT!!! You might think this should be set to 'multipart/form-data'
			// but this is not true because when we are sending up files the request
			// needs to include a 'boundary' parameter which identifies the boundary
			// name between parts in this multi-part request and setting the Content-type
			// manually will not set this boundary parameter. For whatever reason,
			// setting the Content-type to 'false' will force the request to automatically
			// populate the headers properly including the boundary parameter.
			headers: { 'Content-Type': undefined },
			//This method will allow us to change how the data is sent up to the server
			// for which we'll need to encapsulate the model data in 'FormData'
			transformRequest: function (data) {
				var formData = new FormData();
				//need to convert our json object to a string version of json otherwise
				// the browser will do a 'toString()' on the object which will result
				// in the value '[Object object]' on the server.
				// formData.append("model", angular.toJson(data.model));
				formData.append("model", angular.toJson(data.model));

				//now add all of the assigned file
				console.log($scope.files);
				for (var i = 0; i < $scope.files.length; i++) {
					//add each file to the form data and iteratively name them
					formData.append("property-images", $scope.files[i]);
				}
				return formData;
			},
			//Create an object that contains the model and files which will be transformed
			// in the above transformRequest method
			data: { model: $scope.model, "property-images": $scope.files }

		}).
		success(function (data, status, headers, config) {
			alert("success!");
			console.log(data, status, headers, config);
		}).
		error(function (data, status, headers, config) {
			alert("failed!");
			console.log(data, status, headers, config);
		});
	};
}




/* To read more on this :
http://shazwazza.com/post/uploading-files-and-json-data-in-the-same-request-with-angular-js/
 */
function fileUpload() {
	return {
		scope: true,        //create a new scope
		link: function (scope, el, attrs) {
			el.bind('change', function (event) {
				var files = event.target.files;
				//iterate files since 'multiple' may be specified on the element
				for (var i = 0;i<files.length;i++) {
					//emit event upward
					scope.$emit("fileSelected", { file: files[i] });
				}
			});
		}
	};
}