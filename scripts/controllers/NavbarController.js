adsApp.controller('NavbarController', 
	function NavbarController($scope, $location) 
	{ 
	    $scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
	}
);