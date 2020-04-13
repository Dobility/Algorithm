var data = [], data1 = [];
var length = Math.ceil(Math.random() * 20) + 1;
for (var i = 0; i < length; i++) {
	data.push(Math.ceil(Math.random() * 20));
	data1.push(data[i]);
}

function QuickSort(A, p, r) {
	if (p < r) {
		var q = Partition(A, p, r);
		QuickSort(A, p, q - 1);
		QuickSort(A, q + 1, r);
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
	console.log("standard: \n", data1.sort(function(a, b) {return a - b}));
	QuickSort(data, 0, data.length - 1);
	console.log("after: \n", data);
}

main();