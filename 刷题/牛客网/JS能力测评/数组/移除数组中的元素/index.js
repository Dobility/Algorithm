function remove(arr, item) {
    return arr.filter(a => a !== item);
}

function removeWithoutCopy(arr, item) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            count++;
            for (let j = i + 1; j < arr.length; j++) {
                arr[j - 1] = arr[j];
            }
        }
    }
    arr.length = arr.length - count;
    return arr;
}
