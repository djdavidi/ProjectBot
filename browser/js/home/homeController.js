app.controller('HomeCtrl', function ($scope, AuthService, $state, ApiFactory, RandomFactory) {
   	$scope.combinationApis=[];
   	$scope.combinationDatasets=[];
   	$scope.combinationTools=[];
   	$scope.resultObjects=[];

	RandomFactory.getCategories()
	.then(function(cats){
		$scope.apiCategories = cats[0];
		$scope.datasetCategories = cats[1];
		
	})

	$scope.randomize = function(category1,category2,category3){
		RandomFactory.randomize(category1,category2,category3)
		.then(function(resultArr){
			var finalArr=[];
			console.log('resultArr'+resultArr)
			// the find skip limit in backend returns arrays
			resultArr.forEach(function(obj){
				obj=obj[0];
				if(obj.link.indexOf('http://')> -1) obj.link = obj.link.slice(7,-1)
				finalArr.push(obj);
			})
			$scope.resultObjects = finalArr;
			console.log(JSON.stringify($scope.resultObjects));
		})

	}
});