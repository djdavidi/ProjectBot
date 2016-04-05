app.controller('HomeCtrl', function ($scope, AuthService, $state, ApiFactory, RandomFactory) {
   
	ApiFactory.getApi()
	.then(function(list){
	console.log("list"+list)
	$scope.thing = list
	})

	RandomFactory.getCategories()
	.then(function(cats){
		$scope.apiCategories = cats[0];
		$scope.datasetCategories = cats[1];
		
	})

	$scope.randomize = function(category1,category2,category3){
		RandomFactory.randomize(category1,category2,category3)
		.then(function(resultArr){
			$scope.resultObjects = resultArr;
		})
	}
});