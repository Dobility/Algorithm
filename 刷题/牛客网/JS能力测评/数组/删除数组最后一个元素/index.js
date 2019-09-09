function truncate(arr) {
    if (arr.length > 1) {
        return arr.slice(0, arr.length - 1);
    }
    return [];
}
