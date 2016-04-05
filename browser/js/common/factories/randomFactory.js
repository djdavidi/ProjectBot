app.factory('RandomFactory', function($http) {
    var resultObjects =[];
    return {
        randomize: function(apiOne,apiTwo,datasetOne) {
            console.log("RANFDOM"+apiOne)
            return $http.get('/api/random',{params: {apiOne:apiOne,apiTwo:apiTwo,datasetOne:datasetOne}})
            .then(function(response) {
                console.log("response" + JSON.stringify(response.data))
                console.log("result objec"+resultObjects)
                resultObjects = response.data;
                console.log("result objec"+resultObjects)
                return response.data
            })
        },
        getCategories: function() {
            return $http.get('/api/random/categories')
                .then(function(response) {
                    return response.data;
                })
        }
    }
});
