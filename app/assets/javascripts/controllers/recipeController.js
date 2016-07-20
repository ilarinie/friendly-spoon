friendlyApp.controller("RecipeController", ["$scope", "$http","$sce",function($scope, $http, $sce) {

 $scope.times = new Array(5);

  var path = window.location.pathname
  if (path.charAt(path.length-1) == '/'){
		//remove possible slash at the end of path
		path = path.substr(0, path.length-1)
  }
  var inc = [];
  var checked = [];

    $scope.recipe = [];
    $scope.incs = [];
    $scope.checked = [];

    $scope.doubleButton = "Double";
    $scope.doubled = false;
    $scope.divideButton = "Divide";
    $scope.noteSwitchButton = "Notes";
    $scope.divided = false;
    function getRecipe(){
      $http.get(path + ".json").then(function(result) {
        $scope.recipe = result.data
        $scope.incs = $scope.recipe.recipe_ingredients;
        $scope.safeInstruction = $sce.trustAsHtml($scope.recipe.instruction)
      });
    }
    getRecipe();


    $scope.submitNote = function(data){
      var params = {}
      params.note = {}
      params.note.note = data.note
      params.note.rating = data.rating
      params.note.recipe_id = $scope.recipe.id


      $http.post('/notes', params).then(function() {
        getRecipe();
      });
    }


    $scope.noteSwitch = function(){
      if ($scope.noteSwitchButton == "Notes"){
        $scope.noteSwitchButton = "Recipe";
      }else {
        $scope.noteSwitchButton = "Notes"
      }
    }
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
      if ($scope.divided){
         $scope.incs = multiplyAmounts($scope.incs, 2);
         $scope.divided = false;
         $scope.doubled = false;
         $scope.divideButton = "Divide";
         $scope.doubleButton = "Double";
      }
      else if ($scope.doubled){
         $scope.incs = divideAmounts($scope.incs, 4);
         $scope.divided = true;
         $scope.doubled = false;
         $scope.divideButton = "Reset";
         $scope.doubleButton = "Double";
      }else{
         $scope.incs = divideAmounts($scope.incs, 2);
         $scope.divided = true;
         $scope.doubled = false;
         $scope.divideButton = "Reset";
         $scope.doubleButton = "Double";
      }
  };
  $scope.double = function(){
      if ($scope.doubled){
         $scope.incs = divideAmounts($scope.incs, 2);
         $scope.divided = false;
         $scope.doubled = false;
         $scope.divideButton = "Divide"
         $scope.doubleButton = "Double"
      }else if ($scope.divided){
         $scope.incs = multiplyAmounts($scope.incs, 4);
         $scope.divided = false;
         $scope.doubled = true;
         $scope.divideButton = "Divide"
         $scope.doubleButton = "Reset"
      }else{
         $scope.incs = multiplyAmounts($scope.incs, 2);
         $scope.divided = false;
         $scope.doubled = true;
         $scope.divideButton = "Divide"
         $scope.doubleButton = "Reset"
      }
  };
  function divideAmounts(items, divider){
     var length = items.length
     for (var i = 0; i < length; i++){
        if (items[i].hasOwnProperty("amount")){
        items[i].amount = items[i].amount / divider
        }
     }
     return items;
  }
  function multiplyAmounts(items, multiplier){
     var length = items.length
     for (var i = 0; i < length; i++){
        if (items[i].hasOwnProperty("amount")){
        items[i].amount = items[i].amount * multiplier
        }
     }
     return items;
  }



}]);
