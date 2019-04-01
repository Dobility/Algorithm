require('../../../../utils/ArrayUtils')
let stack = [], stackMin = [];
function push(node) {
    stack.push(node);
    if (stackMin.length == 0 ||
        (stackMin.length > 0 && node < stackMin.top()))
        stackMin.push(node);
}
function pop() {
    if (stack.length > 0) {
        let pop = stack.pop();
        if (pop == stackMin.top()) {
            stackMin.pop();
        }
        return pop;
    } else {
        return null;
    }
}
function top() {
    if (stack.length > 0) {
        return stack.top();
    } else {
        return null;
    }
}
function min() {
    if (stackMin.length > 0) {
        return stackMin.top();
    } else {
        return null;
    }
}
