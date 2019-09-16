function partial(fn, str1, str2) {
    return function() {
        return fn(str1, str2, arguments[0])
    }
}

// var sayIt = function(greeting, name, punctuation) {     return greeting + ', ' + name + (punctuation || '!'); };
// console.log(partial(sayIt, 'Hello', 'Ellie')('!!!'));
