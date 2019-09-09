let n = 4
let P = []

function Perm(m) {
    if (m == n) {
        console.log(P)
    } else {
        for (let i = m; i < n; i++) {
            let t = P[i];
            P[i] = P[m];
            P[m] = t;
            Perm(m + 1)
            t = P[i];
            P[i] = P[m];
            P[m] = t;
        }
    }
}

function generate() {
    for (let i = 0; i < n; i++) {
        P[i] = i + 1
    }
    Perm(1)
}

generate();
