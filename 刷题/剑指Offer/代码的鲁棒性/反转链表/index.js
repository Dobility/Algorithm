/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

require('../../../../utils/ObjectUtils')

/**
 * 指针法
 * @param pHead
 * @returns {*}
 * @constructor
 */
function ReverseList(pHead) {
    if (pHead) {
        let p = pHead.clone()
        p.next = null
        while (pHead.next) {
            let q = pHead.next.clone()
            q.next = p
            p = q
            pHead = pHead.next
        }
        return p
    }
    return pHead
}

/**
 * 栈法
 * @param pHead
 * @returns {*}
 * @constructor
 */
function ReverseList_stack(pHead) {
    if (pHead) {
        let stack = []
        while (pHead) {
            stack.push(pHead.clone())
            pHead = pHead.next
        }
        let p = stack.pop()
        let root = p
        while (stack.length) {
            p.next = stack.pop()
            p = p.next
        }
        p.next = null   // 最后结点要终结
        return root
    }
    return pHead
}

let list = require('../../../../data/LinkedList')
console.log(ReverseList(list).toJSONString())
