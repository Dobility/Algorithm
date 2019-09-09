/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
    // write code here
    let arr = []
    while (pHead) {
        if (arr.includes(pHead)) {
            return pHead
        }
        arr.push(pHead)
        pHead = pHead.next
    }
    return null
}

let ListNode = require('../../../../utils/LinkedListUtils')
let pHead = new ListNode(1)
pHead.next = new ListNode(2)
pHead.next.next = new ListNode(3)
pHead.next.next.next = pHead.next
console.log(EntryNodeOfLoop(pHead))
