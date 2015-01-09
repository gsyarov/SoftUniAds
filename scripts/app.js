'use strict';

var adsApp = angular
.module('adsApp', ['ngResource', 'ngRoute', 'ui.bootstrap.pagination'])
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/home.html'
	})
	.when('/login', {
		templateUrl: 'templates/login.html'
	})
	.when('/register', {
		templateUrl: 'templates/register.html'
	})
	.otherwise({redirectTo: '/'});
}).constant('pageSize', 3);