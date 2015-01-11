'use strict';

adsApp.factory('UserAds', function($http, $location, notifyService) {
	return {
		deleteAd: function(id, success, error) {
			var request = {
                    method: 'DELETE',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/Ads/' + id,
                    headers: {
                    	'Authorization': sessionStorage.header
                    }
                };
            $http(request).
			  	success(function(data) {
                    success(data);
                }).error(error);
		},
		editAd: function(id, ad, success, error) {
			var request = {
                    method: 'PUT',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/Ads/' + id,
                    data: ad,
                    headers: {
                    	'Authorization': sessionStorage.header
                    }
                };
            $http(request).
			  	success(function(data) {
                    success(data);
                }).error(error);
		},
		publishAd: function(ad, success, error) {
			var request = {
                    method: 'POST',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/Ads',
                    data: ad,
                    headers: {
                    	'Authorization': sessionStorage.header
                    }
                };
            $http(request).
			  	success(function(data) {
                    success(data);
                }).error(error);
		},
		getAd: function(id, success, error) {
			var request = {
                    method: 'GET',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/Ads/' + id,
                    headers: {
                    	'Authorization': sessionStorage.header
                    }
                };
			$http(request).
			  	success(function(data) {
                    success(data);
                }).error(error);

		},
		getAllAds: function(adsParams, success, error) {
			var request = {
                    method: 'GET',
                    url: 'http://softuni-ads.azurewebsites.net/api/user/Ads',
                    params: adsParams,
                    headers: {
                      'Authorization': sessionStorage.header
                    }
                };
			$http(request).
			  	success(function(data) {
                    success(data);
                }).error(error);

		},
		deactivate: function(id, success, error) {
			var request = {
                method: 'PUT',
                url: 'http://softuni-ads.azurewebsites.net/api/user/ads/deactivate/'+ id,
                headers: {
                  'Authorization': sessionStorage.header
                }
            };
			$http(request).
			  	success(function(data) {
                    success(data);
                }).error(error);

		},
		publishAgain: function(id, success, error) {
			var request = {
				method: 'PUT',
				url: 'http://softuni-ads.azurewebsites.net/api/user/ads/PublishAgain/'+ id,
				headers: {
				'Authorization': sessionStorage.header
				}
			};
			$http(request).
			  	success(function(data) {
                    success(data);
                }).error(error);

		}

	}

});