function reOrderArray(array) {
    // 思路1
    let odd = [], even = [];
    array.forEach(a => {
        if (a % 2 == 0) {
            even.push(a);
        } else {
            odd.push(a);
        }
    });
    return odd.concat(even);
}
