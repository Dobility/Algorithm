function NumberOf1(n) {
    let flag = 1, count = 0;
    while (flag) {
        if (n & flag)
            count++;
        flag = flag << 1;
    }
    return count;
}
