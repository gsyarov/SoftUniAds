'use strict';

adsApp.controller('RegisterController',
	function RegisterController($scope, $http, $location, Auth, Towns, notifyService) {

		Towns.getAllTowns(function success(data) {
                //console.log(data);
				$scope.towns = data;
            },
            function error(err) {
                //TODO
            });

		$scope.register = function(user) {
			var request = {
                    method: 'POST',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/Register',
                    data: user
                };
			$http(request).
			  	success(function(data, status, headers, config) {
				    var token = data.token_type + ' ' + data.access_token;
					var username = data.username;
					// console.log(username);
					// console.log(token);
					Auth.register(token, username);
			  	}).
			  	error(function(data, status, headers, config) {
			    	notifyService.showError("User registration failed", data);
			  	});
		}
	}
);