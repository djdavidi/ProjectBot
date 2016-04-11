app.factory('UserFactory',function($http,AuthService){
	return {
		addToFavorites:function(itemId,objClass){

			$http.put('/api/users/favorites',{itemId:itemId,objClass:objClass})
			.then(function(response){
				return response.data;
			})
		}
	}
})