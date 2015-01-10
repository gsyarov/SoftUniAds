'use strict';

adsApp.controller('EditAdController',
	function EditAdController($scope, $routeParams, $http, $location, Auth, Towns, Categories, notifyService) {

		var request = {
                    method: 'GET',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/Ads/' + $routeParams.id,
                    headers: {
                    	'Authorization': sessionStorage.header
                    }
                };
			$http(request).
			  	success(function(data, status, headers, config) {
					$scope.ad = data;
			  	}).
			  	error(function(data, status, headers, config) {
			    	notifyService.showError("User registration failed", data);
			  	});

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
			var request = {
                    method: 'PUT',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/Ads/' + $routeParams.id,
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
			    	notifyService.showError("Edit failed", data);
			  	});
		}
	}
);