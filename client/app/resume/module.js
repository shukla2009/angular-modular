angular.module('resume', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('resume', {
        url        : '/resume',
        templateUrl: 'app/resume/resume.html'
    });
});