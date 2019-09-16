function alterContext(fn, obj) {
    return fn.bind(obj)();
}
