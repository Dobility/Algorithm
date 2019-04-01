let READ = 'r';
function printMatrix(matrix) {
    let arr = [];
    if (matrix.length != 0) {
        let LEN = {
            i: matrix.length,
            j: matrix[0].length,
            size: matrix.length * matrix[0].length
        };
        let DIR = {
            right: 0,
            down: 1,
            left: 2,
            up: 3
        };
        let ADD = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ];
        let VAR = {
            count: 0,
            i: 0,
            j: -1,
            dir: DIR.right
        };
        while (VAR.count < LEN.size) {
            printMyMatrix(matrix, arr, LEN, DIR, ADD, VAR);
        }
    }
    return arr;
}
function printMyMatrix(matrix, arr, LEN, DIR, ADD, VAR) {
    let next_i = VAR.i + ADD[VAR.dir][0],
        next_j = VAR.j + ADD[VAR.dir][1];
    if (next_i >= LEN.i
        || next_j >= LEN.j
        || next_i < 0
        || next_j < 0
        || matrix[next_i][next_j] == READ)
    {
        VAR.dir = (VAR.dir == DIR.up ? DIR.right : VAR.dir + 1);
    }
    VAR.i += ADD[VAR.dir][0];
    VAR.j += ADD[VAR.dir][1];
    VAR.i = VAR.i < 0 ? 0 : (VAR.i >= LEN.i ? LEN.i - 1 : VAR.i);
    VAR.j = VAR.j < 0 ? 0 : (VAR.j >= LEN.j ? LEN.j - 1 : VAR.j);
    if (VAR.i < LEN.i && VAR.i >=0
        && VAR.j < LEN.j && LEN.j >= 0
        && matrix[VAR.i][VAR.j] != READ)
    {
        arr.push(matrix[VAR.i][VAR.j]);
        matrix[VAR.i][VAR.j] = READ;
    }
    VAR.count++;
}

var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(printMatrix(matrix));
