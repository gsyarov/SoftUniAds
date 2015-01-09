'use strict';

adsApp.controller('HomeController',
	function HomeController($scope, Ads, Categories, Towns, pageSize) {	

		$scope.adsParams = {
			'startPage' : 1,
			'pageSize' : pageSize
		};

		$scope.reloadAds = function() {
			Ads.getAllAds(
              $scope.adsParams,
              function success(data) {
                  	$scope.ads = data;
              },
              function error(err) {
                	//TODO
              }
          );
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