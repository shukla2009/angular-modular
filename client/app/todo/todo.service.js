angular.module('todo').service('TodoService', function () {

    var ser = {};
    ser.todos=[];
    ser.add = function (todo) {
        ser.todos.push(todo);
    }
    ser.remove = function (todo) {
        var index = ser.todos.indexOf(todo);
        ser.todos.splice(index, 1);
    }
    ser.clearCompleted = function () {
        for (var i = ser.todos.length - 1; i >= 0; i--) {
            if (ser.todos[i].completed) {
                ser.remove(ser.todos[i]);
            }
        }
    }

    return ser;

    /* return {
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

     }*/
});
