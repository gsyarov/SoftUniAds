'use strict';

adsApp.factory('Ads', function($resource) {
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/ads');
	return {
		getAllAds: function(params, success, error) {
			return resource.get(params, success, error);
		}
	}

});

adsApp.factory('Categories', function($resource) {
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/Categories');
	return {
		getAllCategories: function(success, error) {
			return resource.query(success, error);
		}
	}

});

adsApp.factory('Towns', function($resource) {
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/Towns');
	return {
		getAllTowns: function(success, error) {
			return resource.query(success, error);
		}
	}

});