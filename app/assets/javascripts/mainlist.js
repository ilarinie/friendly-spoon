var friendlyApp = angular.module("friendlyApp", []);


friendlyApp.controller("RecipesController", function($scope, $http) {


  $http.get('recipes.json').success(function(data, status, headers, config) {
    $scope.recipes = data;
  });

    var _searchText;
    $scope.searchText = undefined;
    
  $scope.order = 'name';
  
  $scope.sort_by = function (order){
    $scope.order = order;
  }


});

friendlyApp.controller("IngredientsController", function($scope, $http) {


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

});
