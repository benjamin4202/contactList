/* globals app, console */

/* Main Controller */

"use strict";

app.controller('mainController', ['$scope', '$http', function($scope, $http) {

	$scope.isLoaded = false;

	$http({
		method: 'GET',
		url: 'https://candidate-test.herokuapp.com/contacts'
	}).then(function successCallback(response) {

		$scope.contacts = response.data;
		$scope.isLoaded = true;

	}, function errorCallback(response) {

		console.error(response);
		$scope.apiError = true;
		$scope.isLoaded = false;

	});

}]);