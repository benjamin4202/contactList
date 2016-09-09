/* Main Controller */

app.controller('mainController', ['$scope', '$http', function($scope, $http) {
	$http({
		method: 'GET',
		url: 'https://candidate-test.herokuapp.com/contacts'
	}).then(function successCallback(response) {
		$scope.contacts = response.data;
	}, function errorCallback(response) {
		console.log('error');
	});
}]);