function printListFromTailToHead(head)
{
	var arr = [];
    while (head != null) {
    	arr.push(head.val);
    	head = head.next;
    }
    return arr.reverse();
}