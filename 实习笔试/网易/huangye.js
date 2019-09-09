let [U, D, L, R] = [1, 2, 3, 4]

function traverse(arr, steps) {

}

function getNextPosition(dir, i, j) {
    switch (dir) {
        case U:
            return [i - 1, j]
        case D:
            return [i + 1, j]
        case L:
            return [i, j - 1]
        case R:
            return [i, j + 1]
    }
}
