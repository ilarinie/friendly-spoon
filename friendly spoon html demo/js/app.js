var apper = angular.module("apper", []);

apper.controller("IncController", function($scope, $location) {
	$scope.incs = [{name: "milk", id:1},{name: "flour",id:2},{name: "bananas", id:3}];
	$scope.units = ["cup","dl","l"];
	$scope.checked = [];
	
	console.log("kea: "+$scope.recipeinc)
	var path = window.location.pathname;
	
	console.log(path );
	
	$scope.toggleInc = function (index) {
		$scope.checked.push($scope.incs[index]);
		$scope.incs.splice(index, 1);
	};
	
	$scope.reset = function() {
		$scope.incs.push.apply($scope.incs, $scope.checked);
		$scope.checked = [];
	};
	
	$scope.submitMyForm = function(recipeinc, index){
		recipeinc.inc_id = index
		console.log(recipeinc)
		
		var data = $scope.recipeinc;
	
	}
});
