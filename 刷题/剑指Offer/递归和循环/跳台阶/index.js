function jumpFloor(n) {
    // 迭代动归，避免递归超时
    var fb = [1, 1];
    for (var i = 2; i <= n; i++) {
        fb.push(fb[i - 2] + fb[i - 1]);
    }
    return fb[n];
}
