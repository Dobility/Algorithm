function partialUsingArguments(fn) {
    let arg = Array.from(arguments).slice(1, arguments.length);
    let result = function() {
        return fn.apply(this, arg.concat(Array.from(arguments)))
    }
    return result;
}
