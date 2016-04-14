app.config(function($stateProvider) {

    $stateProvider.state('userPage', {
        url: '/user-page',
        templateUrl: 'js/user-page/user-page.html',
        controller: 'userPageCtrl'
    });

});

// not actually right- needs to be redone
app.controller('userPageCtrl', function($scope) {


});

