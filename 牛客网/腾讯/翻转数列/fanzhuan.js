const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
	let tokens = line.split(' ');
	let n = parseInt(tokens[0]);
	let m = parseInt(tokens[1]);
	console.log((n / m) / 2 * m * m);
});
