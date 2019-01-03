var stack1 = [], stack2 = [];
function push(node)
{
    stack1.push(node);
}
function pop()
{
	stack2 = [];
    while (stack1.length > 1) {
    	stack2.push(stack1.pop());
    }
    var head = stack1.pop();
    while (stack2.length > 0) {
    	stack1.push(stack2.pop());
    }
    return head || null;
}