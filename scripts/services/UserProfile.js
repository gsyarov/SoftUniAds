'use strict';

adsApp.factory('UserProfile', function($http){
    return {
            getProfile: function(success, error) {
            var request = {
                method: 'GET',
                url: 'http://softuni-ads.azurewebsites.net/api/user/Profile',
                headers: {
                    'Authorization': sessionStorage.header
                }
            };
            $http(request).
                success(function(data) {
                    success(data);
                }).error(error);
            },
            putProfile: function(userData ,success, error) {
            var request = {
                method: 'PUT',
                url: 'http://softuni-ads.azurewebsites.net/api/user/Profile',
                data: userData,
                headers: {
                    'Authorization': sessionStorage.header
                }
            };
            $http(request).
                success(function(data) {
                    success(data);
                }).error(error);
            },
            changePass: function(passData ,success, error) {
            var request = {
                method: 'PUT',
                url: 'http://softuni-ads.azurewebsites.net/api/user/ChangePassword',
                data: passData,
                headers: {
                    'Authorization': sessionStorage.header
                }
            };
            $http(request).
                success(function(data) {
                    success(data);
                }).error(error);
            }
        }
})