app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller:function($scope,ApiList){
        	ApiList.getApi()
        	.then(function(list){
        	console.log("list"+list)
        	$scope.thing = list

        	})
        }
    });
});





app.factory('ApiList', function ($http) {
	return {
    	getApi : function () {
        return $http.get('/api/random').then(function (response) {
        	console.log("response"+response.data)
            return response.data
        });
    }

	}

});