function findAllOccurrences(arr, target) {
    const index = [];
    arr.forEach((a, i) => {
        if (a === target) {
            index.push(i);
        }
    });
    return index;
}
