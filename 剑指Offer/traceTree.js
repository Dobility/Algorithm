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
        while (r) {
            stack.push(r);
            r = r.left;
        }
        // 输出数据
        if (stack.length) {
            let t = stack.pop();
            trace.push(t.val);
            r = t.right;
        }
    }
    return trace;
}

// 中序简历：递归
let traceLCR = [];
function LCR_Rec(root) {
    if (root) {
        LCR_Rec(root.left);
        traceLCR.push(root.val);
        LCR_Rec(root.right);
    }
}

// 后序遍历
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
console.log(LCR_Stack(root))
// LCR_Rec(root);
// let test = traceLCR;
// console.log(test)