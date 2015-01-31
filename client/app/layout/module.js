angular.module('layout', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/resume');
    $stateProvider.state('layout', {
        url        : '/layout',
        templateUrl: 'app/layout/layout.html'
    });
});