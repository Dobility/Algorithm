function GetLeastNumbers_Solution(input, k) {
    input = Array.from(new Set(input)).sort()
    return input.length >= k ? input.slice(0, k) : []
}

console.log(GetLeastNumbers_Solution([], 4))
