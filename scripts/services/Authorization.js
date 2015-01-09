'use strict';

adsApp.factory('Auth', function(Logout, $location) {
	return {
		login: function(token, username) {
			if((token != null) && (username != null)){
				sessionStorage.header = token;
				sessionStorage.username = username;
				$location.path('/')
			}else {
				$location.path('/login')
			}
		},
		logout: function() {
			if((sessionStorage.header !== undefined) && (sessionStorage.username !== undefined)){
				Logout.logout(
				function success(data) {
                  	sessionStorage.clear();
              	},
              	function error(err) {
                	//TODO
              	});
				$location.path('/')
			}else {
				$location.path('/')
			}
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