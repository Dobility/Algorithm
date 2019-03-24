function ListNode(x){
    this.val = x;
    this.next = null;
}

let head = new ListNode(1)
let p = head
for (let i = 2; i < 9; i++) {
    p.next = new ListNode(i)
    p = p.next
}
module.exports = head