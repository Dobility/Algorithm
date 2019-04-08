/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
    return forceObject(pHead1, pHead2)
}

// 暴力，看似一层 while 实际上就是两层暴力
function force(pHead1, pHead2) {
    let p1 = pHead1
    let p2 = pHead2
    while (p1 != p2) {
        p1 = p1 ? p1.next : pHead2
        p2 = p2 ? p2.next : pHead1
    }
    return p1
}

// 数组暴力搜索
function forceArr(pHead1, pHead2) {
    // 偷换概念，转成数组
    let arr1 = [], arr2 = []
    while (pHead1) {
        arr1.push(pHead1)
        pHead1 = pHead1.next
    }
    while (pHead2) {
        arr2.push(pHead2)
        pHead2 = pHead2.next
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i].val == arr2[j].val) {
                return arr1[i]
            }
        }
    }
    return null
}

// 用 object 优化暴力方法
function forceObject(pHead1, pHead2) {
    let obj = {}
    while (pHead1) {
        if (!obj.hasOwnProperty(pHead1.val)) {
            obj[pHead1.val] = pHead1
        }
        pHead1 = pHead1.next
    }
    while (pHead2) {
        if (obj.hasOwnProperty(pHead2.val)) {
            return obj[pHead2.val]
        }
        pHead2 = pHead2.next
    }
    return null
}

require('../../../../utils/LinkedListUtils')
let pHead1 = require('../../../../data/LinkedList')
let pHead2 = require('../../../../data/LinkedList').next
let s1 = '', s2 = ''
pHead1.traverse(val => {s1 += val + ','})
pHead2.traverse(val => {s2 += val + ','})
console.log(s1)
console.log(s2)
console.log(FindFirstCommonNode(pHead1, pHead2))
