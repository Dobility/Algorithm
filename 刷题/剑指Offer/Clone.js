/**
 * 分解让复杂问题简单
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
 * （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 */

function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
// function Clone(pHead) {
//     if (!pHead)
//         return null;
//     let list = new RandomListNode(pHead.label);
//     list.next = Clone(pHead.next);
//     list.random = pHead.random;
//     return list;
// }
function Clone(pHead) {
    if (!pHead)
        return null;
    let list = new RandomListNode(pHead.label);
    list.next = copy(pHead.next);
    list.random = copy(pHead.random);
    return list;
}
function copy(pHead) {
    return JSON.parse(JSON.stringify(pHead));
}

let p1 = new RandomListNode(1);
let p2 = new RandomListNode(2);
let p3 = new RandomListNode(3);
p1.next = p2;
p1.random = p3;
// console.log(Clone(p1) === p1);
let pc = Clone(p1);
p3.label = 20;
console.log(pc.random)