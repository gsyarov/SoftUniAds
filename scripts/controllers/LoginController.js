'use strict';

adsApp.controller('LoginController',
	function LoginController($scope, Login) {

		$scope.login = function(user) {

			Login.post(user).$promise.then(function(data){
				var token = data.token_type + ' ' + data.access_token;
				var username = data.username;
				console.log(username);
				console.log(token);
			});
			
		}
	}
);