var indexApp = angular.module("indexApp", ['ngAnimate']);

indexApp.filter('search', ["$filter", function($filter){
   return function(items, text){
      if (!text || text.length === 0)
        return items;

      // split search text on space
      var searchTerms = text.split(',');

      // search for single terms.
      // this reduces the item list step by step
      searchTerms.forEach(function(term) {
        if (term && term.length)
          items = $filter('filter')(items, term);
      });

      return items
   };
}]);

indexApp.controller("indexController", function($scope, $location) {
	$scope.recipes = [
{
id: 5,
name: "Sesamtangot",
user_id: 2,
duration: {
id: 2,
range: "30min - 1h",
created_at: "2016-07-14T09:13:08.004Z",
updated_at: "2016-07-14T09:13:08.004Z"
},
ratingaverage: null,
ingredients: [
{
name: "vesi"
},
{
name: "hiiva"
},
{
name: "margariini"
},
{
name: "vehnäjauho"
},
{
name: "maito"
},
{
name: "suola"
},
{
name: "maito"
},
{
name: "maito"
},
{
name: "sesamsiemeniä"
}
],
tags: [ ]
},
{
id: 6,
name: "Kauralastut",
user_id: 2,
duration: {
id: 1,
range: "0min - 30min",
created_at: "2016-07-14T09:13:07.932Z",
updated_at: "2016-07-14T09:13:07.932Z"
},
ratingaverage: 7,
ingredients: [
{
name: "margariini"
},
{
name: "sokeri"
},
{
name: "vehnäjauho"
},
{
name: "kaurahiutale"
},
{
name: "leivinjauhe"
},
{
name: "kananmuna"
}
],
tags: [
{
id: 1,
title: "Cookies"
}
]
}
]
$scope.tags = [
{
id: 1,
title: "Cookies"
},
{
id: 2,
title: "Pies"
},
{
id: 3,
title: "Breads"
}
]	
	
	$scope.searchText = "";
	$scope.emptySearchText = function(){
		$scope.searchForm.$setPristine();
		console.log("diidadaa")
	}
	
	$scope.randomRecipe = function(){
		var draft = $scope.recipes

		if (draft.length == 0){
			$scope.searchText = "No recipes";
		}else {
			var lenght = draft.length
			var random = Math.round(Math.random()*(draft.length-1));
			this.searchText = draft[random].name
			$scope.randoms.push(draft[random])
		}
	}
});