var n = 4;
var P = new Array(n + 1);

function Perm1(m) {
	if (m == n) {
		output();
	} else {
		sort(P, m, n);
		for (var j = m; j <= n; j++) {
			swap(P, j, m);
			Perm1(m + 1);
			swap(P, j, m);
		}
	}
}

function sort(P, m, n) {
	for (var i = m; i < n; i++) {
		for (var j = i + 1; j <= n; j++) {
			if (P[i] > P[j]) {
				swap(P, i, j);
			}
		}
	}
}

function swap(P, j, m) {
	var tmp = P[j];
	P[j] = P[m];
	P[m] = tmp;
}

function generate() {
	for (var i = 1; i <= n; i++) {
		P[i] = i;
	}
}

function output() {
	var str = "";
	for (var i = 1; i <= n; i++) {
		str += P[i] + " ";
	}
	console.log(str);
}

generate();
Perm1(1);
