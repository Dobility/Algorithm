function VerifySquenceOfBST(sequence) {
    if (sequence.length) {
        return verify(sequence);
    }
    return false;
}
function verify(seq) {
    if (seq.length) {
        let q = seq.length - 1;
        let p = 0;
        while (seq[p] < seq[q]) {
            p++;
        }
        if (p != q) {
            let left = seq.slice(0, p);
            let right = seq.slice(p, q);
            if (seq[q] < Math.min.apply(null, right)) {
                return verify(left) && verify(right);
            }
            return false;
        }
        return true;
    }
    return true;
}

// let test = [1, 4, 3, 7, 8, 5, 13, 12, 17, 15, 10];
// let test = [];
let test = [15, 13, 4, 14, 6, 7, 14, 18, 8, 11];
console.log(VerifySquenceOfBST(test));
