function curtail(arr) {
    if (arr.length > 1) {
        return arr.slice(1, arr.length);
    }
    return [];
}
