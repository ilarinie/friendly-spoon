var AMOUNT_MIXED_REGEX = /^\d{0,2}\d(\s[1-9]\/[1-9])$/i
var AMOUNT_DECIMAL_REGEX = /^[1-9]{1,4}[,.]{0,1}[0-9]{0,3}$/
var AMOUNT_FRACTION_REGEX = /^[1-9]\/[1-9]$/

friendlyApp.directive('incamount', function(){

	return {
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl){
			ctrl.$validators.incamount = function(modelValue){
				return ctrl.$isEmpty(modelValue) || AMOUNT_DECIMAL_REGEX.test(modelValue) || AMOUNT_FRACTION_REGEX.test(modelValue) ||AMOUNT_MIXED_REGEX.test(modelValue)
			}
		}
	}
});

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

  $scope.etsinta = {}
  $scope.etsinta.text = "";


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
    recipeIngredient.amount = parseAmount(recipeIngredient.amount)
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

  function parseAmount(amount){

	if (AMOUNT_DECIMAL_REGEX.test(amount)){
		return parseFloat(amount.replace(',','.'))
	}else if (AMOUNT_FRACTION_REGEX.test(amount)) {
		var values = amount.split('/')
		return values[0]/values[1]
	}else if (AMOUNT_MIXED_REGEX.test(amount)){
		var values = amount.split(' ')
		var integer = parseInt(values[0])
		var values2 = values[1].split('/')
		var fraction = parseFloat(values2[0]/values2[1])
		return integer+fraction
	}
  }


}]);
