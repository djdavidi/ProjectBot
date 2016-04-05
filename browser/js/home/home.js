app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });
});





app.factory('ApiFactory', function($http) {
    return {
        getApi: function() {
            return $http.get('/api/random').then(function(response) {
                console.log("response" + response.data)
                return response.data
            })
        }

    }

});
