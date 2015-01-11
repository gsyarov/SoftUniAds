'use strict';

adsApp.controller('ProfileController',
	function ProfileController($scope, Towns, UserProfile, notifyService) {

		Towns.getAllTowns(function success(data) {
                //console.log(data);
				$scope.towns = data;
            },
            function error(err) {
                //TODO
            });

		UserProfile.getProfile(
			function success(data) {
                $scope.user = data;
            },
            function error(err) {
                notifyService.showError("Failed", err);
            })

		$scope.editProfile = function(userData) {
			UserProfile.putProfile(userData,
			function success(data) {
                notifyService.showInfo("Update successfully");
            },
            function error(err) {
                notifyService.showError("Failed", err);
            })
		}

		$scope.changePassword = function(passData) {
			UserProfile.changePass(passData,
			function success(data) {
                notifyService.showInfo("Change Password successfully");
            },
            function error(err) {
                notifyService.showError("Failed", err);
            })
		}
	}
);