var data = [], data1 = [];
var length = Math.ceil(Math.random() * 20) + 1;
for (var i = 0; i < length; i++) {
	data.push(Math.ceil(Math.random() * 20));
	data1.push(data[i]);
}
var k = Math.ceil(Math.random() * (data.length - 1)) - 1;

// var data =  [ 5, 20, 12, 14, 11, 6, 9, 17, 14, 17, 6, 14, 2, 8, 19, 11, 6, 10 ];
// var data1 =  [ 5, 20, 12, 14, 11, 6, 9, 17, 14, 17, 6, 14, 2, 8, 19, 11, 6, 10 ];
// var k = 15;

// var data = [ 3, 4, 18, 5, 11, 16, 8, 6, 11, 11 ];
// var data1 = [ 3, 4, 18, 5, 11, 16, 8, 6, 11, 11 ];
// var k = 4 - 1;

function QuickSelectKMin(A, p, r) {
	if (p <= r) {
		var q = Partition(A, p, r);
		if (q == k) {
			return A[q];
		} else if (q > k) {
			return QuickSelectKMin(A, p, q - 1);
		} else {
			return QuickSelectKMin(A, q + 1, r);
		}
	}
}

function Partition(A, p, r) {
	var x = A[r];
	var i = p - 1;
	for (var j = p; j < r; j++) {
		if (A[j] <= x) {
			i++;
			var a = A[i];
			A[i] = A[j];
			A[j] = a;
		}
	}
	var a = A[i+1];
	A[i+1] = A[r];
	A[r] = a;
	return (i+1);
}

function main() {
	console.log("before: \n", data);
	console.log("standard sort: \n", data1.sort(function(a, b) {return a - b}));
	console.log("第%d小的数字是：%d", k + 1, data1[k]);
	console.log("实验结果: %d", QuickSelectKMin(data, 0, data.length - 1));
}

main();