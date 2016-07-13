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

friendlyApp.controller("RecipeController", ["$scope", "$http", function($scope, $http){
  
  var path = window.location.pathname
  var rec
  console.log(path)
  
  $http.get(path+".json").success(function(data, status, headers, config) {
    $scope.recipe = data;
    console.log(data)
    
  });
  
  $scope.$watch("recipe", function(value){
  rec = $scope.recipe
  }); 
  $scope.ingredients = rec
  console.log($scope.ingredients)
  
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
