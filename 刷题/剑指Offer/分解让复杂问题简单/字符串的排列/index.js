function Permutation(str) {
    let P = str.split('')
    // 需要先排序
    P.sort()

    let result = []
    Perm(P, 0, result)

    // 去除重复元素，例如输入 aa 不应该产生 aa, aa，而应该只有一个 aa
    result = Array.from(new Set(result))

    return result
}

function Perm(P, m, result) {
    if (m == P.length - 1) {
        result.push(P.join(''))
    } else {
        for (let i = m; i < P.length; i++) {
            swap(P, i, m)

            // 字典序处理
            P = P.slice(0, m + 1).concat(
                P.slice(m + 1, P.length).sort()
            )
            Perm(P, m + 1, result)

            swap(P, i, m)
        }
    }
}

function swap(P, i, m) {
    let tmp = P[i]
    P[i] = P[m]
    P[m] = tmp
}

console.log(Permutation("abc"))
console.log(Permutation("aa"))
