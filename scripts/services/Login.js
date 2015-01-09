'use strict';

adsApp.factory('Login', function($http){
    return {
            login: function(userData, success, error) {
                var request = {
                    method: 'POST',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/Login',
                    data: userData
                };
                $http(request).success(function(data) {
                    success(data);
                }).error(error);
            }};
}).factory('Logout', function($resource){
    var resource = $resource('http://softuni-ads.azurewebsites.net/api/user/Logout',{},{
        logout:{
            method:"POST",
            isArray:false,
            headers: {'Authorization': sessionStorage.header}
        },
    });
    return resource;
});