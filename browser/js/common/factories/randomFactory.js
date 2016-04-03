app.factory('RandomFactory', function($http) {
    return {
        randomize: function() {
            return $http.get('/api/random')
            .then(function(response) {
                console.log("response" + response.data)
                return response.data
            })
        }
    }
});
