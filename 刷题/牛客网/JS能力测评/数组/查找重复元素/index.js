function duplicates(arr) {
    return Array.from(
        new Set(arr.filter(a => arr.indexOf(a) !== arr.lastIndexOf(a)))
    );
}
