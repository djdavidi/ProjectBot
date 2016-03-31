app.controller('HomeCtrl', function ($scope, AuthService, $state, ApiFactory) {
   
	ApiFactory.getApi()
	.then(function(list){
	console.log("list"+list)
	$scope.thing = list
	})

	ApiFactory.getCategories()
	.then(function(cats){
		$scope.categories = cats;
		
	})

    $scope.simulateQuery = false;
    $scope.isDisabled    = false;
    // list of `state` value/display objects
    $scope.categories        = ApiFactory.getCategories();
    $scope.querySearch   = querySearch;
    $scope.selectedItemChange = selectedItemChange;
    $scope.searchTextChange   = searchTextChange;
    $scope.newState = newState;

    function querySearch (query) {
      var results = query ? $scope.categories.filter( createFilterFor(query) ) : $scope.categories,
          deferred;
      if ($scope.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }
	   function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };
    }
});