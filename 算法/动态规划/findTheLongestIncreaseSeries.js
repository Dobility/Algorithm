function generateData(n) {
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr.push(Math.ceil(Math.random() * 20));
	}
	return arr;
}

function findTheLongestIncreaseSeries(arr) {
	var series = new Array(arr.length);
	for (var i = 0; i < arr.length; i++) {
		series[i] = [];
		var k = 0;
		series[i][k] = arr[i];
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] >= series[i][k]) {
				k++;
				series[i][k] = arr[j];
			}
		}
	}
	var maxIndex = 0, maxLength = 0;
	for (var i = 0; i < series.length; i++) {
		if (series[i].length > maxLength) {
			maxLength = series[i].length;
			maxIndex = i;
		}
	}
	console.log(series[maxIndex]);
}

function main() {
	var arr = generateData(10);
	console.log("origin: ");
	console.log(arr);
	console.log("=========================");
	findTheLongestIncreaseSeries(arr);
}

main();