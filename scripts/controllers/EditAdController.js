'use strict';

adsApp.controller('EditAdController',
	function EditAdController($scope, $routeParams, $location, UserAds, Towns, Categories, notifyService) {

		UserAds.getAd($routeParams.id,
			function success(data) {
                $scope.ad = data;
            },
            function error(err) {
                //TODO
            })
		

		Towns.getAllTowns(function success(data) {
                //console.log(data);
				$scope.towns = data;
            },
            function error(err) {
                //TODO
            });

		Categories.getAllCategories(
			function success(data) {
                //console.log(data);
				$scope.categories = data;
            },
            function error(err) {
                //TODO
            });

		$scope.editAd = function(ad) {
			UserAds.editAd($routeParams.id, ad,
				function success(data) {
	                notifyService.showInfo("successfully");
					$location.path('/user/ads')
	            },
	            function error(err) {
	                notifyService.showError("Edit failed", err);
	            });
		}
	}
);