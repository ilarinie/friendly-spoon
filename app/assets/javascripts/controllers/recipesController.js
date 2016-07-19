friendlyApp.controller("RecipesController", ["$scope", "$http", function($scope, $http) {



  $http.get('recipes.json').success(function(data, status, headers, config) {
    $scope.recipes = data;
  });

  var _searchText;
  $scope.searchText = undefined;


  $scope.order = 'name';
  $scope.orderDir = false;

  $scope.sort_by = function(order) {
    $scope.order = order;
    $scope.orderDir = !$scope.orderDir;
  }


}]);
