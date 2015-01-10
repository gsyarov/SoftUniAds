'use strict';

adsApp.controller('UserAdController',
	function UserAdController($scope, $location, $http, UserAds, Categories, Towns, pageSize, notifyService) {	

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
            console.log(data);
          });
		};

		$scope.reloadAds();

    $scope.status = function(status) {
      $scope.adsParams = {
        'startPage' : 1,
        'pageSize' : pageSize,
        'status' : status
      };
      $scope.reloadAds();
    }
    

    $scope.deactivate = function(id){
      var request = {
                    method: 'PUT',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/ads/deactivate/'+ id,
                    headers: {
                      'Authorization': sessionStorage.header
                    }
                };
      $http(request).
          success(function(data, status, headers, config) {
            notifyService.showInfo("Ad deactivate successful");
          }).
          error(function(data, status, headers, config) {
            //TODO
          });
    }

    $scope.publishAgain = function(id){
      var request = {
                    method: 'PUT',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/ads/PublishAgain/'+ id,
                    headers: {
                      'Authorization': sessionStorage.header
                    }
                };
      $http(request).
          success(function(data, status, headers, config) {
            notifyService.showInfo("Ad Publish Again successful");
          }).
          error(function(data, status, headers, config) {
            //TODO
          });
    }
		

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