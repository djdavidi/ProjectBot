app.config(function($stateProvider) {

    $stateProvider.state('userPage', {
        url: '/user-page',
        templateUrl: 'js/user-page/user-page.html',
        controller: 'userPageCtrl',
        resolve:{
            ideas:function(UserFactory){
                return UserFactory.getIdeas()
            }
        }
    });

});

// not actually right- needs to be redone
app.controller('userPageCtrl', function($scope,ideas) {
    console.log("ideers"+ideas)
    $scope.userIdeas = ideas;

});

