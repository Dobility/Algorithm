/**
 * 链表
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 */

function printListFromTailToHead(head)
{
	var arr = [];
    while (head != null) {
    	arr.push(head.val);
    	head = head.next;
    }
    return arr.reverse();
}