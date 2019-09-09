/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead) {
    if (!pHead || !pHead.next)
        return pHead
    // 因为头结点可能也是重复结点，所以要创建一个虚拟头结点
    let root = new ListNode('virtual head')
    root.next = pHead
    // 利用3个指针，i, j, k三个初始为紧凑着
    let i = root, j = root.next, k = root.next.next
    while (i && j && k) {
        // 尽量移远一点
        let repeat = false
        while (j && k && j.val == k.val) {
            k = k.next
            repeat = true
        }
        // 修改指针
        if (repeat) {
            // 如果有重复结点，那 i 的后继直接指向 k
            i.next = k
        } else {
            // 没找到重复结点，i 直接往下一位
            i = i.next
        }
        // i, j, k紧凑着
        j = i.next
        k = j ? j.next : null
    }
    // 输出虚拟头结点的后继
    return root.next
}

require('../../../../utils/ArrayUtils')
function deleteDuplication_stack(pHead) {
    if (!pHead || !pHead.next)
        return pHead
    let stack = []
    while (pHead) {
        if (stack.top() != pHead.val) {
            // 不重复元素直接入栈
            stack.push(pHead.val)
            pHead = pHead.next
        } else {
            // 出现重复元素
            let repeat = stack.pop()
            // 一直跳过重复元素
            while (pHead && pHead.val == repeat) {
                pHead = pHead.next
            }
        }
    }
    // 将栈转成链表
    let root = stack.length ? new ListNode(stack[0]) : null
    let p = root
    for (let i = 1; i < stack.length; i++) {
        p.next = new ListNode(stack[i])
        p = p.next
    }
    return root
}

let ListNode = require('../../../../utils/LinkedListUtils')
let pHead = new ListNode(1)
pHead.next = new ListNode(2)
pHead.next.next = new ListNode(3)
pHead.next.next.next = new ListNode(3)
pHead.next.next.next.next = new ListNode(4)
pHead.next.next.next.next.next = new ListNode(4)
pHead.next.next.next.next.next.next = new ListNode(5)
deleteDuplication_stack(pHead).traverse()
