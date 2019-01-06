/**
 * 树
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    var result = null;
    if (pre.length > 1) {
    	// 先序遍历的第一个一定是根节点
    	var root = pre[0];
    	// 剔除掉根节点
    	pre.shift();
    	var vinRootIndex = vin.indexOf(root);
    	// 以根节点区分开左右子树
    	var vinLeft = vin.slice(0, vinRootIndex);
    	var vinRight = vin.slice(vinRootIndex + 1, vin.length);
    	var preLeft = pre.slice(0, vinLeft.length);
    	var preRight = pre.slice(preLeft.length, pre.length);
    	// 用同样的方法查找左右子树
    	result = {
    		val: root,
    		left: reConstructBinaryTree(preLeft, vinLeft),
    		right: reConstructBinaryTree(preRight, vinRight)
    	}
    } else if (pre.length == 1) {
    	// 叶子结点
    	result = {
    		val: pre[0],
    		left: null,
    		right: null
    	}
    }
    return result;
}
