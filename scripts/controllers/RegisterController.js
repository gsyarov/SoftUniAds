'use strict';

adsApp.controller('RegisterController',
	function RegisterController($scope, $http, $location, Auth, Towns) {

		Towns.getAllTowns(function success(data) {
                //console.log(data);
				$scope.towns = data;
            },
            function error(err) {
                //TODO
            });

		$scope.register = function(user) {
			console.log(user);
			$http.post('http://softuni-ads.azurewebsites.net/api/user/Register', user).
			  	success(function(data, status, headers, config) {
				    var token = data.token_type + ' ' + data.access_token;
					var username = data.username;
					// console.log(username);
					// console.log(token);
					Auth.login(token, username);
			  	}).
			  	error(function(data, status, headers, config) {
			    	// TODO
			  	});
		}
	}
);