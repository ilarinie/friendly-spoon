var apper = angular.module("apper", []);

apper.filter('setDecimal', function($filter) {
    return function(input, places) {
        if (isNaN(input)) return input;
        // If we want 1 decimal place, we want to mult/div by 10
        // If we want 2 decimal places, we want to mult/div by 100, etc
        // So use the following to create that factor
        var factor = "1" + Array(+(places > 0 && places + 1)).join("0");

    };
});

apper.controller("IncController", function($scope, $location) {
       $scope.units = ["cup", "dl", "l"];
   

    $scope.recipe = {
        id: 5,
        name: "Sesamtangot",
        level: {
            id: 1,
            level: "Easy",
            created_at: "2016-07-14T09:13:08.176Z",
            updated_at: "2016-07-14T09:13:08.176Z"
        },
        duration: {
            id: 2,
            range: "30min - 1h",
            created_at: "2016-07-14T09:13:08.004Z",
            updated_at: "2016-07-14T09:13:08.004Z"
        },
        note: "<p>Paistoaika 12-15min 200 asteessa.</p>",
        recipe_ingredients: [{
            id: 4,
            ingredient: {
                id: 4,
                name: "vesi",
                created_at: "2016-07-17T12:47:18.307Z",
                updated_at: "2016-07-17T12:47:18.307Z"
            },
            amount: "1.0",
            unit: {
                id: 2,
                name: "dl",
                created_at: "2016-07-14T09:13:07.627Z",
                updated_at: "2016-07-14T09:13:07.627Z"
            },
            instruction: "haaleaa"
        }, {
            id: 5,
            ingredient: {
                id: 5,
                name: "hiiva",
                created_at: "2016-07-17T13:24:01.673Z",
                updated_at: "2016-07-17T13:24:01.673Z"
            },
            amount: "50.0",
            unit: {
                id: 7,
                name: "g",
                created_at: "2016-07-14T09:13:07.732Z",
                updated_at: "2016-07-14T09:13:07.732Z"
            },
            instruction: null
        }, {
            id: 6,
            ingredient: {
                id: 6,
                name: "margariini",
                created_at: "2016-07-17T13:24:28.700Z",
                updated_at: "2016-07-17T13:24:28.700Z"
            },
            amount: "50.0",
            unit: {
                id: 7,
                name: "g",
                created_at: "2016-07-14T09:13:07.732Z",
                updated_at: "2016-07-14T09:13:07.732Z"
            },
            instruction: null
        }, {
            id: 7,
            ingredient: {
                id: 7,
                name: "vehnäjauho",
                created_at: "2016-07-17T13:25:02.810Z",
                updated_at: "2016-07-17T13:25:02.810Z"
            },
            amount: "7.0",
            unit: {
                id: 2,
                name: "dl",
                created_at: "2016-07-14T09:13:07.627Z",
                updated_at: "2016-07-14T09:13:07.627Z"
            },
            instruction: null
        }, {
            id: 8,
            ingredient: {
                id: 8,
                name: "maito",
                created_at: "2016-07-17T13:25:33.714Z",
                updated_at: "2016-07-17T13:25:33.714Z"
            },
            amount: "1.0",
            unit: {
                id: 3,
                name: "l",
                created_at: "2016-07-14T09:13:07.640Z",
                updated_at: "2016-07-14T09:13:07.640Z"
            },
            instruction: null
        }, {
            id: 9,
            ingredient: {
                id: 9,
                name: "suola",
                created_at: "2016-07-17T13:26:55.337Z",
                updated_at: "2016-07-17T13:26:55.337Z"
            },
            amount: "1.0",
            unit: {
                id: 4,
                name: "tsp",
                created_at: "2016-07-14T09:13:07.681Z",
                updated_at: "2016-07-14T09:13:07.681Z"
            },
            instruction: null
        }, {
            id: 10,
            ingredient: {
                id: 8,
                name: "maito",
                created_at: "2016-07-17T13:25:33.714Z",
                updated_at: "2016-07-17T13:25:33.714Z"
            },
            amount: "0.0",
            unit: {
                id: 3,
                name: "l",
                created_at: "2016-07-14T09:13:07.640Z",
                updated_at: "2016-07-14T09:13:07.640Z"
            },
            instruction: null
        }, {
            id: 11,
            ingredient: {
                id: 8,
                name: "maito",
                created_at: "2016-07-17T13:25:33.714Z",
                updated_at: "2016-07-17T13:25:33.714Z"
            },
            amount: "5.0",
            unit: {
                id: 2,
                name: "dl",
                created_at: "2016-07-14T09:13:07.627Z",
                updated_at: "2016-07-14T09:13:07.627Z"
            },
            instruction: null
        }, {
            id: 12,
            ingredient: {
                id: 8,
                name: "maito",
                created_at: "2016-07-17T13:25:33.714Z",
                updated_at: "2016-07-17T13:25:33.714Z"
            },
            amount: null,
            unit: null,
            instruction: "voiteluun"
        }, {
            id: 14,
            ingredient: {
                id: 10,
                name: "sesamsiemeniä",
                created_at: "2016-07-17T13:28:23.708Z",
                updated_at: "2016-07-17T13:28:23.708Z"
            },
            amount: null,
            unit: null,
            instruction: "päälle"
        }]
    }
	
	$scope.incs = $scope.recipe.recipe_ingredients
	$scope.checked = [];

    console.log("kea: " + $scope.recipeinc)
    var path = window.location.pathname;



    if (path.charAt(path.length - 1) == '/') {
        //remove possible slash at the end of path
        path = path.substr(0, path.length - 1)
    }


    $scope.divideButton = "Divide";
    $scope.doubleButton = "Double";
	$scope.noteSwitchButton = "Notes";
    $scope.divided = false;
    $scope.doubled = false;

    console.log(path);

	$scope.noteSwitch = function(){
		if ($scope.noteSwitchButton == "Notes"){
			$scope.noteSwitchButton = "Recipe View";
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

    $scope.submitMyForm = function(recipeinc, index) {
        recipeinc.inc_id = index
        console.log(recipeinc)

        var data = $scope.recipeinc;

    }
    $scope.divide = function() {
        if ($scope.divided) {
            $scope.incs = multiplyAmounts($scope.incs, 2);
            $scope.divided = false;
            $scope.doubled = false;
            $scope.divideButton = "Divide";
            $scope.doubleButton = "Double";
        } else if ($scope.doubled) {
            $scope.incs = divideAmounts($scope.incs, 4);
            $scope.divided = true;
            $scope.doubled = false;
            $scope.divideButton = "Reset";
            $scope.doubleButton = "Double";
        } else {
            $scope.incs = divideAmounts($scope.incs, 2);
            $scope.divided = true;
            $scope.doubled = false;
            $scope.divideButton = "Reset";
            $scope.doubleButton = "Double";
        }
    };
    $scope.double = function() {
        if ($scope.doubled) {
            $scope.incs = divideAmounts($scope.incs, 2);
            $scope.divided = false;
            $scope.doubled = false;
            $scope.divideButton = "Divide"
            $scope.doubleButton = "Double"
        } else if ($scope.divided) {
            $scope.incs = multiplyAmounts($scope.incs, 4);
            $scope.divided = false;
            $scope.doubled = true;
            $scope.divideButton = "Divide"
            $scope.doubleButton = "Reset"
        } else {
            $scope.incs = multiplyAmounts($scope.incs, 2);
            $scope.divided = false;
            $scope.doubled = true;
            $scope.divideButton = "Divide"
            $scope.doubleButton = "Reset"
        }
    };


    function divideAmounts(items, divider) {
        var length = items.length
        for (var i = 0; i < length; i++) {
            if (items[i].hasOwnProperty("amount")) {
                items[i].amount = items[i].amount / divider
            }
        }
        return items;
    }

    function multiplyAmounts(items, multiplier) {
        var length = items.length

        for (var i = 0; i < length; i++) {
            if (items[i].amount != undefined) {

                items[i].amount = items[i].amount * multiplier
            }
            console.log("items " + i + "amount " + items[i].amount)
        }
        return items;
    }

    $scope.convert = function() {
        /*unit ids 
        1: cup
        2: dl
        3: l 
        4: tsp
        5: tbsp
        6: mm
        7: g 
        8: pound 
        9: oz
        10: pcs		
        */
        var length = $scope.incs.length
        for (var i = 0; i < length; i++) {
            //litres to cups
            if ($scope.incs[i].unit.id == 3) {
                $scope.incs[i].unit.name = "cup"
                $scope.incs[i].unit.id = 4
                $scope.incs[i].amount = $scope.incs[i].amount / 4.22675284
            }
            //grams to pounds
            else if ($scope.incs[i].unit.id == 7) {
                $scope.incs[i].unit.name = "lb"
                $scope.incs[i].unit.id = 8
                $scope.incs[i].amount = $scope.incs[i].amount * 0.00220462262
            }
            //dl to cups
            else if ($scope.incs[i].unit.id == 2) {
                $scope.incs[i].unit.name = "cup"
                $scope.incs[i].unit.id = 4
                $scope.incs[i].amount = $scope.incs[i].amount * 0.422675284
            }
            //pounds to grams
            else if ($scope.incs[i].unit.id == 8) {
                $scope.incs[i].unit.name = "g"
                $scope.incs[i].unit.id = 6
                $scope.incs[i].amount = $scope.incs[i].amount / 0.00220462262
            }
            //cups to dl
            else if ($scope.incs[i].unit.id == 4) {
                $scope.incs[i].unit.name = "dl"
                $scope.incs[i].unit.id = 2
                $scope.incs[i].amount = $scope.incs[i].amount / 0.422675284
            }
            //ounce to grams
            else if ($scope.incs[i].unit.id == 9) {
                $scope.incs[i].unit.name = "g"
                $scope.incs[i].unit.id = 6
                $scope.incs[i].amount = $scope.incs[i].amount * 28.3495231
            } else {}
        }
    }


});