function fibonacci(n) {
    let arr = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}

console.log(fibonacci(6))
