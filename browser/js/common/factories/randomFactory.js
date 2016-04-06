app.factory('RandomFactory', function($http) {
    return {
        randomize: function(apiOne,apiTwo,datasetOne) {
            return $http.get('/api/random',{params: {api:[apiOne,apiTwo],dataset:[datasetOne]}})
            .then(function(response) {
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
