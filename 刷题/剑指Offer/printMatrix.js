/**
 * 画图让抽象形象化
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
 * 例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 */

function printMatrix(matrix)
{
	var arr = [];
    if (matrix.length != 0) {
		var LEN = {
			i: matrix.length,
			j: matrix[0].length,
			size: matrix.length * matrix[0].length
		};
		var DIR = {
			right: 0,
			down: 1,
			left: 2, 
			up: 3
		}
		var ADD = [
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0]
		];
		var VAR = {
			count: 0,
			i: 0,
			j: 0,
			dir: DIR.right,
			read: 'r'
		}
        while (VAR.count < LEN.size) {
            printing(matrix, arr, LEN, DIR, ADD, VAR);
            VAR.count++;
        }
    }
	return arr.toString();
}
function printing(matrix, arr, LEN, DIR, ADD, VAR) {
	if (VAR.i < LEN.i && VAR.i >=0 
		&& VAR.j < LEN.j && LEN.j >= 0 
		&& matrix[VAR.i][VAR.j] != VAR.read) 
	{
		arr.push(matrix[VAR.i][VAR.j]);
		matrix[VAR.i][VAR.j] = VAR.read;
	} else {
		console.log('switch');
		VAR.dir = (VAR.dir == DIR.up ? DIR.right : VAR.dir + 1);
	}
	VAR.i += ADD[VAR.dir][0];
	VAR.j += ADD[VAR.dir][1];
	VAR.j = (VAR.j < 0) ? 0 : VAR.j;
	console.log(VAR);
}
var matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12]
];
printMatrix(matrix);