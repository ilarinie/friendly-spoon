var incApp = angular.module("incApp",['ngAnimate']);

var REGEX = /^\d{0,2}\d(\s[1-9]\/[1-9])$/i
var REGEX2 = /^\d{1,3}$/

incApp.directive('incamount', function(){
	var AMOUNT_FRACTION_REGEX = /^\d{0,2}\d(\s[1-9]\/[1-9])$/i
	var AMOUNT_INTEGER_REGEX = /^\d{1,3}$/

	return {
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl){
			ctrl.$validators.incamount = function(modelValue){
				if (AMOUNT_INTEGER_REGEX.test(modelValue)){
					return true;
				}
				return ctrl.$isEmpty(modelValue) || AMOUNT_FRACTION_REGEX.test(modelValue)
			}
		}
	}
});

incApp.controller("incController", function ($scope){




$scope.submitForm = function(inc){
	console.log(inc)
	
}


});




