'use strict';

adsApp.factory('Ads', function($resource) {
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/ads?PageSize=:Size&StartPage=:Page', {Size:'@Size',Page:'@Page'});
	return {
		getAllAds: function(size, page) {
			return resource.get({Size:size,Page:page});
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