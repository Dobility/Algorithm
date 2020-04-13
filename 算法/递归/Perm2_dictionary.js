var n = 4;
var P = new Array(n + 1);

function Perm2(m) {
	if (m == n + 1) {
		output();
	} else {
		for (var j = 1; j <= n; j++) {
			if (P[j] == 0) {
				P[j] = m;
				Perm2(m + 1);
				P[j] = 0;
			}
		}
	}
}

function generate() {
	for (var i = 1; i <= n; i++) {
		P[i] = 0;
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
Perm2(1);
