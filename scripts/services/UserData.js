// 'use strict';

// adsApp.factory('UserAds', function($http) {
// 	return {
// 		getAllUserAds: function(adsParams) {
// 			var request = {
//                     method: 'GET',
//                     url: 'http://softuni-ads.azurewebsites.net/api/user/Ads',
//                     params: adsParams
//                     ,
//                     headers: {
//                     	'Authorization': sessionStorage.header
//                     }
//                 };
// 			$http(request).
// 			  	success(function(data, status, headers, config) {
// 				    return data;
// 			  	}).
// 			  	error(function(data, status, headers, config) {
// 			    	console.log(data);//notifyService.showError("User registration failed", data);
// 			  	});
// 		},

// 	}

// });