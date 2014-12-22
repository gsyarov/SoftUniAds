'use strict';

var adsApp = angular
.module('adsApp', ['ngResource', 'ngRoute'])
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html'
	})
	.otherwise({redirectTo: '/'});
});