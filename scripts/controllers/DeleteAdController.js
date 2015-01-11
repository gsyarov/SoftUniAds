'use strict';

adsApp.controller('DeleteAdController',
	function DeleteAdController($scope, $routeParams, $location, Auth, notifyService, UserAds) {

		if(!Auth.isLoggedIn()){
            $location.path('/');
        }

		UserAds.getAd($routeParams.id,
			function success(data) {
                $scope.ad = data;
            },
            function error(err) {
                //TODO
            })
		
		$scope.delete = function(id) {
			UserAds.deleteAd(id,
				function success(data) {
	                notifyService.showInfo("Delete Ad successfully");
					$location.path('/user/ads')
	            },
	            function error(err) {
	                notifyService.showError("Failed", err);
	            });
		}

	}
);