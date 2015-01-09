'use strict';

adsApp.factory('Login', function($resource){
    var resource = $resource('http://softuni-ads.azurewebsites.net/api/user/Login',{},{
        post:{
            method:"POST",
            isArray:false
        },
    });
    return resource;
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