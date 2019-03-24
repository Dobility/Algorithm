/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
    let stack = []
    while (head) {
        stack.push(head.val)
        head = head.next
    }
    return stack.reverse()
}

let head = require('../../../../data/LinkedList')
console.log(printListFromTailToHead(head))