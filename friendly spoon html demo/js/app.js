var apper = angular.module("apper", ['ngAnimate']);

apper.filter('setDecimal', function($filter) {
    return function(input, places) {
        if (isNaN(input)) return input;
        // If we want 1 decimal place, we want to mult/div by 10
        // If we want 2 decimal places, we want to mult/div by 100, etc
        // So use the following to create that factor
        var factor = "1" + Array(+(places > 0 && places + 1)).join("0");

    };
});


apper.controller("RecipeController", function($scope, $http, $location, $sce) {
    $scope.times = new Array(5);

    var path = window.location.pathname;
    if (path.charAt(path.length - 1) == '/') {
        //remove possible slash at the end of path
        path = path.substr(0, path.length - 1);
    }
    //NOTE this needs to get recipe id from path = path.substr(path.length-1,path.length)
    var recipeId = 12;
    var inc = [];
    var checked = [];

    // Object initialization
    $scope.recipe = [];
    $scope.incs = [];
    $scope.checked = [];

    // View variable initialization
    $scope.amount_shown = 1;
    $scope.doubleButton = "Double";
    $scope.doubled = false;
    $scope.divideButton = "Divide";
    $scope.noteSwitchButton = "Notes";
    $scope.divided = false;


    function getRecipe() {
        $scope.recipe = recipe;
        $scope.incs = $scope.recipe.recipe_ingredients;
        $scope.safeInstruction = $sce.trustAsHtml($scope.recipe.instruction);
        //cache recipe
        localStorage.recipe = JSON.stringify($scope.recipe);
        saveIncList();
    }
    if (localStorage.recipe){
        $scope.recipe = JSON.parse(localStorage.recipe);
    }

    //Get recipe data unless it's already in cache
    if (!localStorage.recipe || $scope.recipe.id != recipeId){
        console.log("reloaded");
        getRecipe();
    } else{
    //Retrieve cached data
        console.log("retrieving from cache..");
        $scope.incs = JSON.parse(localStorage.incs);
        $scope.checked = JSON.parse(localStorage.checked);
        $scope.safeInstruction = $sce.trustAsHtml($scope.recipe.instruction);
    }


    $scope.submitNote = function(data) {
        var params = {};
        params.note = {};
        params.note.note = data.note;
        params.note.rating = data.rating;
        params.note.recipe_id = $scope.recipe.id;


        $http.post('/notes', params).then(function() {
            getRecipe();
        });
    };
    $scope.deleteNote = function(note_id, index) {

        $http.delete('/notes/' + note_id).then(function() {
            $scope.recipe.notes.splice(index, 1);
        });
    };

    function saveIncList(){
        localStorage.incs = JSON.stringify($scope.incs);
        localStorage.checked = JSON.stringify($scope.checked);
    }

    $scope.noteSwitch = function() {
        if ($scope.noteSwitchButton == "Notes") {
            $scope.noteSwitchButton = "Recipe";
        } else {
            $scope.noteSwitchButton = "Notes";
        }
    };
    $scope.toggleInc = function(index) {
        $scope.checked.push($scope.incs[index]);
        $scope.incs.splice(index, 1);
        if ($scope.incs.length === 0) {
            $scope.reset();
        }
        saveIncList();
    };
    $scope.unToggleInc = function(index) {
        $scope.incs.push($scope.checked[index]);
        $scope.checked.splice(index, 1);
        saveIncList();
    };

    $scope.reset = function() {
        $scope.incs = $scope.incs.concat($scope.checked);
        $scope.checked = [];
        saveIncList();
    };
    $scope.divide = function() {
        if ($scope.divided) {
            $scope.resetAmounts();
        } else {
            $scope.amount_shown = -1;
            $scope.divided = true;
            $scope.doubled = false;
            $scope.divideButton = "Reset";
            $scope.doubleButton = "Double";
        }
    };
    $scope.double = function() {
        if ($scope.doubled) {
            $scope.resetAmounts();
        } else {
            $scope.amount_shown = 2;
            $scope.divided = false;
            $scope.doubled = true;
            $scope.divideButton = "Divide";
            $scope.doubleButton = "Reset";
        }
    };
    $scope.resetAmounts = function(){
        $scope.amount_shown = 1;
        $scope.divided = false;
        $scope.doubled = false;
        $scope.divideButton = "Divide";
        $scope.doubleButton = "Double";
    };
});
