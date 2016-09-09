var app = angular.module("contactsApp", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.otherwise({
			redirectTo: '/'
		});
});