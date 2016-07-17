/*angular.module('friendlyApp.search').filter('search', function($filter){
   return function(items, text){
      if (!text || text.length === 0)
        return items;

      // split search text on space
      var searchTerms = text.split(' ');

      // search for single terms.
      // this reduces the item list step by step
      searchTerms.forEach(function(term) {
        if (term && term.length)
          items = $filter('filter')(items, term);
      });

      return items
   };
});*/

var friendlyApp = angular.module("friendlyApp", ["ui.bootstrap"]);


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

friendlyApp.controller("RecipeController", ["$scope", "$http", function($scope, $http) {

  var path = window.location.pathname
  var inc = [];
  var checked = [];

    $scope.recipe = [];
    $scope.incs = [];
    $scope.checked = [];

    $http.get(path + ".json").then(function(result) {
      $scope.recipe = result.data
      $scope.incs = $scope.recipe.recipe_ingredients;
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

  var recipePath = window.location.pathname.substr(0,window.location.pathname.length-5)+".json"
  console.log(recipePath)

  $http.get(recipePath).success(function(data, status, headers, config){
    $scope.recipe = data;
  })

  var _searchText;
  $scope.searchText = undefined;

  $scope.order = 'name';

  $scope.sort_by = function(order) {
    $scope.order = order;
  };

  $scope.submitForm = function(recipeIngredient, ingredient_id, index){

    //if the form is empty
    if (recipeIngredient == null) {
      recipeIngredient = {};
    }
    recipeIngredient.ingredient_id = ingredient_id
    recipeIngredient.recipe_id = $scope.recipe.id
    var data = recipeIngredient;
    $scope.recipeIngredient = {}
    $http.post('/recipe_ingredients', data)
    $http.get(recipePath).success(function(data, status, headers, config){
      $scope.recipe = data;
    })
  };
  $scope.submitIngredient = function(){

  };

}]);
