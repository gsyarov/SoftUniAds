'use strict';

adsApp.controller('HomeController',
	function HomeController($scope, Ads, Categories, Towns) {		

		Ads.getAllAds().$promise.then(function (ads) {
			//console.log(ads);
			$scope.ads = ads.ads;
		});

		Categories.getAllCategories().$promise.then(function (categories) {
			//console.log(categories);
			$scope.categories = categories;
		});

		Towns.getAllTowns().$promise.then(function (towns) {
			//console.log(towns);
			$scope.towns = towns;
		});

	}
);