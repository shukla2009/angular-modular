angular.module('todo').service('TodoService', function () {
    return {
        todos         : [],
        add           : function (todo) {
            this.todos.push(todo);
        },
        remove        : function (todo) {
            var index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        },
        clearCompleted: function () {
            for (var i = this.todos.length - 1; i >= 0; i--) {
                if (this.todos[i].completed) {
                    this.remove(this.todos[i]);
                }
            }
        }

    }
});
