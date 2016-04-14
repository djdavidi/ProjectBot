app.factory('UserFactory',function($http,AuthService){
	return {
		addToFavorites:function(itemId,objClass){
			$http.put('/api/users/favorites',{itemId:itemId,objClass:objClass})
			.then(function(response){
				return response.data;
			})
		},
		saveIdea:function(apiArr,datasetArr,toolArr){
			console.log("in saveidea UserFactory")
		},
		getIdeas:function(){
			AuthService.getLoggedInUser()
		}
	}
})