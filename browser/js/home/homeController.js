app.controller('HomeCtrl', function ($scope, AuthService, $state, ApiFactory, RandomFactory) {
   
	ApiFactory.getApi()
	.then(function(list){
	console.log("list"+list)
	$scope.thing = list
	})

	ApiFactory.getCategories()
	.then(function(cats){
		$scope.categories = cats;
		
	})

	$scope.randomize = RandomFactory.randomize;
});