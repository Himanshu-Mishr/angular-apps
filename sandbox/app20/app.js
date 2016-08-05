(function(){

	// app setter
	angular.module('app', [
		"app.widget",
		"app.core",
		"module.lmo",
		"module.lmt",
		"module.pl",
		"module.payments",
		"module.services",
		"module.vendors"
	]);

	angular.module("app.widget", []);
	angular.module("app.core", []);

	angular.module("app.apimanager", []);
	angular.module("app.apimanager.lmo", []);
	angular.module("app.apimanager.lmt", []);
	angular.module("app.apimanager.pl", []);
	angular.module("app.apimanager.payments", []);
	angular.module("app.apimanager.services", []);
	angular.module("app.apimanager.vendors", []);

	angular.module("app.datamanager", []);
	angular.module("app.datamanager.lmo", []);
	angular.module("app.datamanager.lmt", []);
	angular.module("app.datamanager.pl", []);
	angular.module("app.datamanager.payments", []);
	angular.module("app.datamanager.services", []);
	angular.module("app.datamanager.vendors", []);

	angular.module("app.services", []);
	angular.module("app.services.lmo", []);
	angular.module("app.services.lmt", []);
	angular.module("app.services.pl", []);
	angular.module("app.services.payments", []);
	angular.module("app.services.services", []);
	angular.module("app.services.vendors", []);

	angular.module("module.lmo.controllers", []);
	angular.module("module.lmt.controllers", []);
	angular.module("module.pl.controllers", []);
	angular.module("module.payments.controllers", []);
	angular.module("module.services.controllers", []);
	angular.module("module.vendors.controllers", []);



	angular.module("module.lmo", [
		"app.apimanager.lmo",
		"app.datamanager.lmo",
		"app.services.lmo",
		"module.lmo.controllers"
	]);

	angular.module("module.lmt", [
		"app.apimanager.lmt",
		"app.datamanager.lmt",
		"app.services.lmt",
		"module.lmt.controllers"
	]);

	angular.module("module.pl", [
		"app.apimanager.pl",
		"app.datamanager.pl",
		"app.services.pl",
		"module.pl.controllers"
	]);

	angular.module("module.payments", [
		"app.apimanager.payments",
		"app.datamanager.payments",
		"app.services.payments",
		"module.payments.controllers"
	]);

	angular.module("module.services", [
		"app.apimanager.services",
		"app.datamanager.services",
		"app.services.services",
		"module.services.controllers"
	]);

	angular.module("module.vendors", [
		"app.apimanager.vendors",
		"app.datamanager.vendors",
		"app.services.vendors",
		"module.vendors.controllers"
	]);


	angular.module("module.lmo.controllers")
		.controller("lmo_dashboard", lmo_dashboard)
		.controller("lmo_edit", lmo_edit)
		.controller("lmo_search", lmo_search)
		.controller("lmo_viewDetails", lmo_viewDetails);

	lmo_dashboard.$inject = ["$scope"];
	function lmo_dashboard($scope) {}

	lmo_edit.$inject = ["$scope"];
	function lmo_edit($scope) {}

	lmo_search.$inject = ["$scope"];
	function lmo_search($scope) {}

	lmo_viewDetails.$inject =  ["$scope"];
	function lmo_viewDetails($scope) {}




	angular.module("module.lmt.controllers")
		.controller("lmt_dashboard", lmt_dashboard)
		.controller("lmt_edit", lmt_edit)
		.controller("lmt_search", lmt_search)
		.controller("lmt_viewDetails", lmt_viewDetails);

	lmt_dashboard.$inject = ["$scope"];
	function lmt_dashboard($scope) {}

	lmt_edit.$inject = ["$scope"];
	function lmt_edit($scope) {}

	lmt_search.$inject = ["$scope"];
	function lmt_search($scope) {}

	lmt_viewDetails.$inject =  ["$scope"];
	function lmt_viewDetails($scope) {}




	angular.module("module.pl.controllers")
		.controller("pl_dashboard", pl_dashboard)
		.controller("pl_edit", pl_edit)
		.controller("pl_search", pl_search)
		.controller("pl_viewDetails", pl_viewDetails);

	pl_dashboard.$inject = ["$scope"];
	function pl_dashboard($scope) {}

	pl_edit.$inject = ["$scope"];
	function pl_edit($scope) {}

	pl_search.$inject = ["$scope"];
	function pl_search($scope) {}

	pl_viewDetails.$inject =  ["$scope"];
	function pl_viewDetails($scope) {}




	angular.module("module.payments.controllers")
		.controller("payments_dashboard", payments_dashboard)
		.controller("payments_edit", payments_edit)
		.controller("payments_search", payments_search)
		.controller("payments_viewDetails", payments_viewDetails);

	payments_dashboard.$inject = ["$scope"];
	function payments_dashboard($scope) {}

	payments_edit.$inject = ["$scope"];
	function payments_edit($scope) {}

	payments_search.$inject = ["$scope"];
	function payments_search($scope) {}

	payments_viewDetails.$inject =  ["$scope"];
	function payments_viewDetails($scope) {}




	angular.module("module.services.controllers")
		.controller("services_dashboard", services_dashboard)
		.controller("services_edit", services_edit)
		.controller("services_search", services_search)
		.controller("services_viewDetails", services_viewDetails);

	services_dashboard.$inject = ["$scope"];
	function services_dashboard($scope) {}

	services_edit.$inject = ["$scope"];
	function services_edit($scope) {}

	services_search.$inject = ["$scope"];
	function services_search($scope) {}

	services_viewDetails.$inject =  ["$scope"];
	function services_viewDetails($scope) {}




	angular.module("module.vendors.controllers")
		.controller("vendors_dashboard", vendors_dashboard)
		.controller("vendors_edit", vendors_edit)
		.controller("vendors_search", vendors_search)
		.controller("vendors_viewDetails", vendors_viewDetails);

	vendors_dashboard.$inject = ["$scope"];
	function vendors_dashboard($scope) {}

	vendors_edit.$inject = ["$scope"];
	function vendors_edit($scope) {}

	vendors_search.$inject = ["$scope"];
	function vendors_search($scope) {}

	vendors_viewDetails.$inject =  ["$scope"];
	function vendors_viewDetails($scope) {}



})();
