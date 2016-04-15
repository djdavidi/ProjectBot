app.factory('UserFactory',function($http,AuthService){
	return {
		addToFavorites:function(itemId,objClass){
			$http.put('/api/favorites',{itemId:itemId,objClass:objClass})
			.then(function(response){
				return response.data;
			})
		},
		saveIdea:function(ideaText,apiArr,datasetArr,toolArr){
			console.log("apiArr"+apiArr+":::text"+ ideaText)
			$http.post('api/ideas',{description:ideaText,apis:apiArr,datasets:datasetArr,tools:toolArr})
			.then(function(res){
				return res.data
			})
		},
		getIdeas:function(){
			$http.get('api/ideas')
			.then(function(res){
				console.log("res idea"+res.data)
				return res.data;
			})
		}
	}
})