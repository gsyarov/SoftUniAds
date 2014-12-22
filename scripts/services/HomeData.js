'use strict';

adsApp.factory('Ads', function($resource) {
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/ads');
	return {
		getAllAds: function() {
			return resource.get();
		}
	}

});

adsApp.factory('Categories', function($resource) {
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/Categories');
	return {
		getAllCategories: function() {
			return resource.query();
		}
	}

});

adsApp.factory('Towns', function($resource) {
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/Towns');
	return {
		getAllTowns: function() {
			return resource.query();
		}
	}

});