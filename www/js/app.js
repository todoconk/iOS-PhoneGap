var angulargap = angular.module("angulargap", []);

angulargap.config(['$routeProvider', function ($routeProvider) {
    console.log('setup routes');
    $routeProvider.
    when('/home', {
        templateUrl: 'js/Templates/home.html',
        controller: 'HomeController'
    }).
    when('/notifications', {
        templateUrl: 'js/Templates/notifications.html',
        controller: 'NotificationsController'
    }).
    otherwise(
    {
        redirectTo: '/home'
    });
}]);