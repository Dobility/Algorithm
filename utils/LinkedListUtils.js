function ListNode(x){
    this.val = x;
    this.next = null;
}
ListNode.prototype.traverse = function(visit) {
    if (!visit)
        visit = console.log
    if (this) {
        visit(this.val)
        if (this.next) {
            this.next.traverse(visit)
        }
    }
}
ListNode.prototype.toArray = function() {
    let arr = []
    this.traverse(val => {
        arr.push(val)
    })
    return arr
}
module.exports = ListNode
