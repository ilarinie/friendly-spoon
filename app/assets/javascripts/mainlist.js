var friendlyApp = angular.module("friendlyApp", ["ui.bootstrap"]);


friendlyApp.controller("RecipesController", ["$scope", "$http", function($scope, $http) {


  $http.get('recipes.json').success(function(data, status, headers, config) {
    $scope.recipes = data;
  });

  var _searchText;
  $scope.searchText = undefined;

  $scope.order = 'name';

  $scope.sort_by = function(order) {
    $scope.order = order;
  }


}]);

friendlyApp.controller("RecipeController", ["$scope", "$http", function($scope, $http) {

  var path = window.location.pathname
  var inc = [];
  var checked = [];

    $scope.recipe = [];
    $scope.incs = [];
    $scope.checked = [];

    $http.get(path + ".json").then(function(result) {
      $scope.recipe = result.data
      $scope.incs = $scope.recipe.ingredients;
    });

  $scope.toggleInc = function(index) {
    $scope.checked.push($scope.incs[index]);
    $scope.incs.splice(index, 1);
  };

  $scope.reset = function() {
    $scope.incs.push.apply($scope.incs, $scope.checked);
    $scope.checked = [];
  };


}]);

friendlyApp.controller("IngredientsController", ["$scope", "$http", function($scope, $http) {


  $http.get('/ingredients.json').success(function(data, status, headers, config) {
    $scope.ingredients = data;
    console.log(data)
  });

  var _searchText;
  $scope.searchText = undefined;

  $scope.order = 'name';

  $scope.sort_by = function(order) {
    $scope.order = order;
  }

}]);
