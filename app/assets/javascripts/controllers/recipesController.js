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
  
  $scope.randoms = []
	
	$scope.randomRecipe = function(){
		/*if every recipe has been drawn, empty drawn recipes list */
		if ($scope.randoms.length == $scope.recipes.length){
			$scope.randoms = []
		}
		/*remove those already drawn */
		var draft = $scope.recipes.filter(function(recipe){
			return $scope.randoms.indexOf(recipe) === -1
		});
		if (draft.length == 0){
			$scope.searchText = "No recipes";
		}else {
			var lenght = draft.length
			var random = Math.round(Math.random()*(draft.length-1));
			this.searchText = draft[random].name
			$scope.randoms.push(draft[random])
		}
	}


}]);
