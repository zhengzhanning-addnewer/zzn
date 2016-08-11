'use strict';
let angular = window.angular;
let service = angular.module('service', []);
service.filter('capitalize',function () {
	return function (input) {
		if (input) {
			return input[0].toUpperCase() + input.slice(1);
		}
	}
})