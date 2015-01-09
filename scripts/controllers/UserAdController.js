'use strict';

adsApp.controller('UserAdController',
	function UserAdController($scope, $http, UserAds, Categories, Towns, pageSize) {	

		$scope.adsParams = {
			'startPage' : 1,
			'pageSize' : pageSize
		};

		$scope.reloadAds = function() {
			var request = {
                    method: 'GET',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/Ads',
                    params: $scope.adsParams
                    ,
                    headers: {
                      'Authorization': sessionStorage.header
                    }
                };
      $http(request).
          success(function(data, status, headers, config) {
            $scope.ads = data;
          }).
          error(function(data, status, headers, config) {
            console.log(data);//notifyService.showError("User registration failed", data);
          });
		};

		$scope.reloadAds();
		

		Categories.getAllCategories(
			function success(data) {
                //console.log(data);
				$scope.categories = data;
            },
            function error(err) {
                //TODO
            });

		Towns.getAllTowns(function success(data) {
                //console.log(data);
				$scope.towns = data;
            },
            function error(err) {
                //TODO
            });

	}
	);