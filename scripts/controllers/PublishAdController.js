'use strict';

adsApp.controller('PublishAdController',
	function PublishAdController($scope, $location, Auth, UserAds, Towns, Categories, notifyService) {

		if(!Auth.isLoggedIn()){
            $location.path('/');
        }

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

		$scope.publishAd = function(ad) {
			UserAds.publishAd(ad,
				function success(data) {
	                notifyService.showInfo("successfully");
					$location.path('/user/ads')
	            },
	            function error(err) {
	                notifyService.showError("Add failed", err);
	            });
		}
	}
);