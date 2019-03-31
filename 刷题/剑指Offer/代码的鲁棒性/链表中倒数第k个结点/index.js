/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
    k--   // 两指针的间隔为 k - 1
    if (!head || k < 0) {
        return null
    }
    let p = head, q = head
    let count = 0
    while (count < k && q) {
        q = q.next
        count++
    }
    // 链表没有 k 长
    if (count < k || !q) {
        return null
    }
    while (q.next) {
        p = p.next
        q = q.next
    }
    return p
}

let list = require('../../../../data/LinkedList')
console.log(FindKthToTail(list, 8))
