/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
require('../../../../utils/ObjectUtils')
let ListNode = require('../../../../utils/LinkedListUtils')
function Merge(pHead1, pHead2) {
    let p = new ListNode(0)
    let root = p
    while (pHead1 && pHead2) {
        if (pHead1.val <= pHead2.val) {
            p.next = new ListNode(pHead1.val)
            pHead1 = pHead1.next
        } else {
            p.next = new ListNode(pHead2.val)
            pHead2 = pHead2.next
        }
        p = p.next
        if (!root) {
            root = p
        }
    }
    p.next = pHead1 ? pHead1 : pHead2
    return root.next
}
let pHead1 = require('../../../../data/LinkedList')
let pHead2 = require('../../../../data/LinkedList')
console.log(Merge(pHead1, pHead2).toJSONString())