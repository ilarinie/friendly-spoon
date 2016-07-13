var friendlyApp = angular.module("friendlyApp", ["ui.bootstrap"]);


friendlyApp.controller("RecipesController", ["$scope", "$http",  function($scope, $http) {


  $http.get('recipes.json').success(function(data, status, headers, config) {
    $scope.recipes = data;
  });

    var _searchText;
    $scope.searchText = undefined;
    
  $scope.order = 'name';
  
  $scope.sort_by = function (order){
    $scope.order = order;
  }


}]);

friendlyApp.controller("RecipeController", ["$scope", "$http", "$location", function($scope, $http, $location){
  
  var path = $location.url().substr(0, $location.url().length -1)+'.json';
  
  $http.get(path).success(function(data, status, headers, config) {
    $scope.recipe = data;
    console.log(data)
  });
  
}]);

friendlyApp.controller("IngredientsController", ["$scope", "$http", function($scope, $http) {


  $http.get('/ingredients.json').success(function(data, status, headers, config) {
    $scope.ingredients = data;
    console.log(data)
  });

  var _searchText;
  $scope.searchText = undefined;
  
   $scope.order = 'name';
  
  $scope.sort_by = function (order){
    $scope.order = order;
  }

}]);
