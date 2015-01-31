angular.module('todo').filter('TodoFilter', function () {

    return function (input, criteria) {
        console.log('Filter : ' + criteria);
        if (criteria === 'all') {
            return input;
        }
        else if (criteria === 'completed') {
            var temp = [];
            for (var i = 0; i < input.length; i++) {
                if (input[i].completed) {
                    temp.push(input[i]);
                }
            }
            return temp;
        }
        else if (criteria === 'active') {
            var temp = [];
            for (var i = 0; i < input.length; i++) {
                if (!input[i].completed) {
                    temp.push(input[i]);
                }
            }
            return temp;
        }
        return [];
    }

});
