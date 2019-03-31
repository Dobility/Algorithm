function rectCover(number) {
    let ways = [0, 1, 2];
    for (let i = 3; i <= number; i++) {
        ways.push(ways[i - 2] + ways[i - 1])
    }
    return ways[number];
}
