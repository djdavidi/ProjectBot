app.factory('UserFactory',function($http,AuthService){
	return {
		addToFavorites:function(itemId,objClass){
			$http.put('/api/favorites',{itemId:itemId,objClass:objClass})
			.then(function(response){
				return response.data;
			})
		},
		saveIdea:function(apiArr,datasetArr,toolArr){
			$http.post('api/ideas')
			.then(function(res){
				return res.data
			})
		},
		getIdeas:function(){
			$http.get('api/ideas')
			.then(function(res){
				return res.data;
			})
		}
	}
})