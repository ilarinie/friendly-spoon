var apper = angular.module("apper", []);

apper.controller("IncController", function($scope) {
	$scope.incs = ["milk","flour","bananas"];
	$scope.checked = [];
	
	$scope.toggleInc = function (index) {
		$scope.checked.push($scope.incs[index]);
		$scope.incs.splice(index, 1);
	};
	
	$scope.reset = function() {
		$scope.incs.push.apply($scope.incs, $scope.checked);
		$scope.checked = [];
	};
});