

var friendlyApp = angular.module("friendlyApp", ["ui.bootstrap"]);

friendlyApp.filter('search', ["$filter", function($filter){
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
}]);
friendlyApp.filter('incSearch', ["$filter", function($filter){
   return function(items, text){
      if (!text || text.length === 0)
        return {};

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
}]);


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

    $scope.doubleButton = "Double!";
    $scope.divideButton = "Divide!";

    $http.get(path + ".json").then(function(result) {
      $scope.recipe = result.data
      $scope.incs = $scope.recipe.recipe_ingredients;
    });

  $scope.toggleInc = function(index) {
    $scope.checked.push($scope.incs[index]);
    $scope.incs.splice(index, 1);
  };
  $scope.unToggleInc = function(index) {
    $scope.incs.push($scope.checked[index]);
    $scope.checked.splice(index, 1);
  };

  $scope.reset = function() {
    $scope.incs.push.apply($scope.incs, $scope.checked);
    $scope.checked = [];
  };
  $scope.divide = function(){
    var length = $scope.incs.length

    for (var i = 0; i < length; i++){
      if (!$scope.incs[i].amount){}
      else{
        if ($scope.doubled){
            $scope.incs[i].amount = $scope.incs[i].amount / 4
        }else {
            $scope.incs[i].amount = $scope.incs[i].amount / 2
        }

      }
    }
    $scope.divideButton = "Divided!";
    $scope.divided = true;
    $scope.doubled = false;
    $scope.doubleButton = "Double!";
  };
  $scope.double = function(){
    var length = $scope.incs.length

    for (var i = 0; i < length; i++){
      if (!$scope.incs[i].amount){}
      else{
        if ($scope.divided){
          $scope.incs[i].amount = $scope.incs[i].amount * 4
        }else{
          $scope.incs[i].amount = $scope.incs[i].amount * 2
        }
      }
    }
    $scope.divideButton = "Divide!";
    $scope.divided = false;
    $scope.doubled = true;
    $scope.doubleButton = "Doubled!";
  };



}]);

friendlyApp.controller("IngredientsController", ["$scope", "$http", function($scope, $http) {

  function getIngredients(){
    $http.get('/ingredients.json').success(function(data, status, headers, config) {
      $scope.ingredients = data;
      console.log(data)
    });
  }
  getIngredients()


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
    $scope.recing = true
    $http.post('/recipe_ingredients', data).then(function(){
      $http.get(recipePath).success(function(data, status, headers, config){
        $scope.recipe = data;
        $scope.recing = false
      })
    })

  };
  $scope.submitIngredient = function(naame){
    $scope.ingredient = {}
    $scope.ingredient.name = naame
    var data = $scope.ingredient;
    $http.post('/ingredients', $scope.ingredient).then(function(){
      getIngredients()
    })
  };

}]);
