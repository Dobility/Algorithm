/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    // 拷贝pHead
    let p = {...pHead}, q = pHead.next
    while (q) {
        p.next.next = p
        p = p.next
        q = q.next
    }
    return p
}

let list = require('../../../../data/LinkedList')
ReverseList(list).traverse()
