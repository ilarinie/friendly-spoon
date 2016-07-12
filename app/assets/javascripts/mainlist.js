var friendlyApp = angular.module('friendlyApp', ['ui.bootstrap']);


friendlyApp.controller("RecipesController", function($scope, $http) {


  $http.get('recipes.json').success(function(data, status, headers, config) {
    $scope.recipes = data;
  });

    var _searchText;
    $scope.searchText = undefined;


});

friendlyApp.controller("IngredientsController", function($scope, $http) {


  $http.get('/ingredients.json').success(function(data, status, headers, config) {
    $scope.ingredients = data;
    console.log(data)
  });

  var _searchText;
  $scope.searchText = undefined;

});
