angular.module("todo").controller("TodoCtrl", function ($scope, TodoService) {
        $scope.todos = TodoService.todos;
        $scope.newTodo = {};

        $scope.add = function () {
            TodoService.add( $scope.newTodo);
            $scope.newTodo = {};
        }

        $scope.delete = function (todo) {
            TodoService.remove(todo);
        }

        $scope.clearCompleted = function () {
            TodoService.clearCompleted();
        }

    }
);