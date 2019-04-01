function IsPopOrder(pushV, popV) {
    let stack = [];
    let j = 0;
    for (let i = 0; i < pushV.length; i++) {
        stack.push(pushV[i]);
        while (stack.length && stack[stack.length - 1] == popV[j]) {
            stack.pop();
            j++;
        }
    }
    return stack.length == 0;
}
