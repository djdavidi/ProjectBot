app.config(function($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/signup.html',
        controller: 'signupCtrl'
    });

});

// not actually right- needs to be redone
app.controller('signupCtrl', function($scope, AuthService, $state) {
    $scope.signup = {};
    $scope.error = null;

    $scope.sendsignup = function(signupInfo) {

        $scope.error = null;

        AuthService.signup(signupInfo).then(function() {
            $state.go('home');
        }).catch(function() {
            $scope.error = 'Invalid signup credentials.';
        });

    };

});

