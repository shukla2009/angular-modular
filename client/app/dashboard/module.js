angular.module('dashboard', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
        url        : '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html'
    });
});
