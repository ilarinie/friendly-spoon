friendlyApp.filter('search', ["$filter", function($filter){
   return function(items, text){
      if (!text || text.length === 0)
        return items;

      // split search text on comma tagsinputia varten
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
