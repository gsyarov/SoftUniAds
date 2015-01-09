adsApp.controller('NavbarController', 
	function NavbarController($scope, $location, Auth) 
	{ 
		$scope.Auth = Auth;

	    $scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };

	    $scope.logout = function() {
			Auth.logout();
		}
	}
);