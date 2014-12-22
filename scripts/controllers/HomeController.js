'use strict';

adsApp.controller('HomeController',
	function HomeController($scope, Ads, Categories, Towns) {		
		Ads.getAllAds(1, 1).$promise.then(function (ads) {
			//console.log(ads);
			$scope.ads = ads.ads;
			var pages = [];
			for (var i = 0; i < ads.numPages; i++) {
				pages[i] = i+1;
			};
			$scope.pages = pages;
		});

		$scope.toPage = function(page){
			Ads.getAllAds(1, page).$promise.then(function (ads) {
				//console.log(ads);
				$scope.ads = ads.ads;
				var pages = [];
				for (var i = 0; i < ads.numPages; i++) {
					pages[i] = i+1;
				};
				$scope.pages = pages;
			});
		}

		

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