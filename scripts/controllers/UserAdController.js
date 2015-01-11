'use strict';

adsApp.controller('UserAdController',
	function UserAdController($scope, $location, Auth, UserAds, Categories, Towns, pageSize, notifyService) {	

    if(!Auth.isLoggedIn()){
            $location.path('/');
        }

		$scope.adsParams = {
			'startPage' : 1,
			'pageSize' : pageSize
		};

		$scope.reloadAds = function() {
			UserAds.getAllAds($scope.adsParams,
        function success(data) {
            //notifyService.showInfo("successfully");
            $scope.ads = data;
        },
        function error(err) {
            notifyService.showError("Load failed", err);
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
      UserAds.deactivate(id,
        function success(data) {
            notifyService.showInfo("Ad deactivate successful");
            $scope.reloadAds();
        },
        function error(err) {
            notifyService.showError("failed", err);
        });
    }

    $scope.publishAgain = function(id){
      UserAds.publishAgain(id,
        function success(data) {
            notifyService.showInfo("Ad Publish Again successful");
            $scope.reloadAds();
        },
        function error(err) {
            notifyService.showError("failed", err);
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

		Towns.getAllTowns(
      function success(data) {
          //console.log(data);
	        $scope.towns = data;
      },
      function error(err) {
          //TODO
      });

	}
	);