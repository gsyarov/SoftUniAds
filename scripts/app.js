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
	.when('/user/ads/publish', {
		templateUrl: 'templates/user/newAd.html'
	})
	.when('/user/ads', {
		templateUrl: 'templates/user/userAd.html'
	})
	.when('/user/ads/edit/:id', {
		templateUrl: 'templates/user/editAd.html'
	})
	.when('/user/ads/delete/:id', {
		templateUrl: 'templates/user/deleteAd.html'
	})
	.otherwise({redirectTo: '/'});
}).constant('pageSize', 5);