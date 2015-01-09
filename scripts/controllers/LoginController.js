'use strict';

adsApp.controller('LoginController',
	function LoginController($scope, Login, Auth, notifyService) {

		$scope.login = function(user) {
			Login.login(user,
                function success(data) {
                    var token = data.token_type + ' ' + data.access_token;
					var username = data.username;
					// console.log(username);
					// console.log(token);
					Auth.login(token, username);;
                },
                function error(err) {
                    notifyService.showError("Login failed", err);
                }
            );
			
		}
	}
);