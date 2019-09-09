function insert(arr, item, index) {
    return arr.slice(0, index)
        .concat(item)
        .concat(arr.slice(index, arr.length));
}
