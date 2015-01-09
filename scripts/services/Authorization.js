'use strict';

adsApp.factory('Auth', function(Logout, $location, notifyService) {
	return {
		login: function(token, username) {
				sessionStorage.header = token;
				sessionStorage.username = username;
				notifyService.showInfo("Login successful");
				$location.path('/')
		},
		register: function(token, username) {
				sessionStorage.header = token;
				sessionStorage.username = username;
				notifyService.showInfo("User registered successfully");
				$location.path('/')
		},
		logout: function() {
			Logout.logout(
			function success(data) {
              	sessionStorage.clear();
              	$location.path('/')
          	},
          	function error(err) {
            	//TODO
          	});

		},
		getCurrentUser: function() {
			return sessionStorage.username;
		},
        isLoggedIn : function() {
	        if(sessionStorage.header && sessionStorage.username){
	        	return true;
	        }else{
	        	return false;
	        }
	    }
	}

});