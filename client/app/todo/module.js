angular.module('todo', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('todo', {
        url        : '/todo',
        templateUrl: 'app/todo/todo.html'/*,
        controller : 'TodoCtrl'*/
    });
});

