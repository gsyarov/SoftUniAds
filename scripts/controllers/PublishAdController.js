'use strict';

adsApp.controller('PublishAdController',
	function PublishAdController($scope, $http, $location, Auth, Towns, Categories, notifyService) {

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
			var request = {
                    method: 'POST',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/Ads',
                    data: ad,
                    headers: {
                    	'Authorization': sessionStorage.header
                    }
                };
			$http(request).
			  	success(function(data, status, headers, config) {
					notifyService.showInfo("successfully");
			  	}).
			  	error(function(data, status, headers, config) {
			    	notifyService.showError("User registration failed", data);
			  	});
		}
	}
);