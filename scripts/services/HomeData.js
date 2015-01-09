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

}).directive('appFilereader', function($q){
	var slice = Array.prototype.slice;

	return {
		restrict: 'A'
		, require: '?ngModel'
		, link: function(scope, element, attrs, ngModel){
			if(!ngModel) return;

			ngModel.$render = function(){}

			element.bind('change', function(e){
				var element = e.target;

				$q.all(slice.call(element.files, 0).map(readFile))
				.then(function(values){
					if(element.multiple) ngModel.$setViewValue(values);
					else ngModel.$setViewValue(values.length ? values[0] : null);
				});

				function readFile(file) {
					var deferred = $q.defer();

					var reader = new FileReader()
					reader.onload = function(e){
						deferred.resolve(e.target.result);
					}
					reader.onerror = function(e) {
						deferred.reject(e);
					}
					reader.readAsDataURL(file);

					return deferred.promise;
				}

            });//change

        }//link

    };//return

})//appFilereader
;;