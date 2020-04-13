// 合并排序

var data = [], data1 = [];
var length = Math.ceil(Math.random() * 20) + 1;
for (var i = 0; i < length; i++) {
	data.push(Math.ceil(Math.random() * 20));
	data1.push(data[i]);
}

function MergeSort(arr, p, r) {
	if (p < r) {
		var q = Math.floor((p + r) / 2);
		MergeSort(arr, p, q);
		MergeSort(arr, q + 1, r);
		Merge(arr, p, q, r);
	}
}

function Merge(arr, p, q, r) {
	var i = p, j = q + 1;
	var tmp = [];
	while (i <= q && j <= r) {
		if (arr[i] < arr[j]) {
			tmp.push(arr[i]);
			i++;
		} else {
			tmp.push(arr[j]);
			j++;
		}
	}
	if (i <= q) {
		for (var _i = i; _i <= q; _i++) {
			tmp.push(arr[_i]);
		}
	}
	if (j <= r) {
		for (var _j = j; _j <= r; _j++) {
			tmp.push(arr[_j]);
		}	
	}
	for (var k = 0; k < tmp.length; k++) {
		arr[p + k] = tmp[k];
	}
}

function main() {
	console.log("before: \n", data);
	console.log("standard: \n", data1.sort(function(a, b) {return a - b}));
	MergeSort(data, 0, data.length - 1);
	console.log("after: \n", data);
}

main();