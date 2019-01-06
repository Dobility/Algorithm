/**
 * 二叉树的三种遍历方式（递归、非递归）
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

// 先序遍历：非递归
function CLR_Stack(root) {
    let stack = [];
    let trace = [];
    if (root) {
        stack.push(root);
        while (stack.length) {
            let r = stack.pop();
            trace.push(r.val);
            // 必须是右子树先进栈
            if (r.right) {
                stack.push(r.right);
            }
            if (r.left) {
                stack.push(r.left);
            }
        }
    }
    return trace;
}

// 先序遍历：递归
let traceCLR = [];
function CLR_Rec(root) {
    if (root) {
        traceCLR.push(root.val);
        CLR_Rec(root.left);
        CLR_Rec(root.right);
    }
}

// 中序遍历：非递归
function LCR_Stack(root) {
    let stack = [];
    let trace = [];
    let r = root;
    while (r || stack.length) {
        // 有点深度遍历的感觉，把左子树全部压入栈
        if (r) {
            stack.push(r);
            r = r.left;
        } else {
            // 输出数据
            if (stack.length) {
                let t = stack.pop();
                trace.push(t.val);
                r = t.right;
                if (!t.right && !t.left) {
                    console.log(t.val + ': leaf');
                }
            }
        }
    }
    return trace;
}

// 中序遍历：递归
let traceLCR = [];
function LCR_Rec(root) {
    if (root) {
        LCR_Rec(root.left);
        traceLCR.push(root.val);
        LCR_Rec(root.right);
    }
}

// 后序遍历：非递归
function LRC_Stack(root) {
    let p = root, r = null;
    let s = [];
    let trace = [];
    while (p || s.length) {
        if (p) {//走到最左边
            s.push(p);
            p = p.left;
        }
        else {
            p = s[s.length - 1];
            if (p.right && p.right != r)//右子树存在，未被访问
                p = p.right;
            else {
                s.pop();
                trace.push(p.val);
                r = p;//记录最近访问过的节点
                p = null;//节点访问完后，重置p指针
            }
        }//else
    }//while
    return trace;
}

// 后序遍历：递归
let traceLRC = [];
function LRC_Rec(root) {
    if (root) {
        LRC_Rec(root.left);
        LRC_Rec(root.right);
        traceLRC.push(root.val);
    }
}

let root = {
    val: 10,
    left: {
        val: 5,
        left: {
            val: 3,
            left: {
                val: 1, left: null, right: null
            },
            right: {
                val: 4, left: null, right: null
            }
        },
        right: {
            val: 8,
            left: {
                val: 7, left: null, right: null
            },
            right: null
        }
    },
    right: {
        val: 15,
        left: {
            val: 12,
            left: null,
            right: {
                val: 13, left: null, right: null
            }
        },
        right: {
            val: 17, left: null, right: null
        }
    }
}

// 树形状：
//         10
//        /  \
//       5   15
//      / \  / \
//     3  8 12  17
//    /\  /  \
//   1 4 7   13
// 先序遍历：[10, 5, 3, 1, 4, 8, 7, 15, 12, 13, 17]
// 中序遍历：[1, 3, 4, 5, 7, 8, 10, 12, 13, 15, 17]
// 后序遍历：[1, 4, 3, 7, 8, 5, 13, 12, 17, 15, 10]

console.log(LCR_Stack(root))
// LCR_Rec(root);
// let test = traceLCR;
// console.log(test)