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
  function getRecipe(){
  $http.get(recipePath).success(function(data, status, headers, config){
    $scope.recipe = data;
  });
  }
  getRecipe()



  var _searchText;
  $scope.searchText = undefined;


  $scope.order = 'name';

  $scope.sort_by = function(order) {
    $scope.order = order;
  };
  $scope.submitTag = function(tag, index){
    $scope.recipe_tag = {}
    $scope.recipe_tag.recipe_id = $scope.recipe.id
    $scope.recipe_tag.tag_id = tag.id
    $http.post('/recipe_tags', $scope.recipe_tag).then(function(){
      getRecipe();
    });
  }
  $scope.removeTag = function(tag, index){
    console.log(tag.id)
    $http.delete('/recipe_tags/'+ tag.id).then(function(){
      getRecipe();
    })
  }

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
  $scope.removeRecipeIngredient = function(id, index){
  	$http.delete('/recipe_ingredients/'+id);
    $scope.recipe.recipe_ingredients.splice(index, 1)
  };

}]);
