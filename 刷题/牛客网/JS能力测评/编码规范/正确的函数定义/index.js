function functions(flag) {
    let getValue;
    if (flag) {
        getValue = () => { return 'a'; }
    } else {
        getValue = () => { return 'b'; }
    }

    return getValue();
}
