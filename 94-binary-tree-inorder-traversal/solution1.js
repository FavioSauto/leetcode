function inorderTraversal(root) {
	let result = [];
	let stack = [];
	let currentNode = root;

	while (currentNode || stack.length) {
		if (currentNode) {
			stack.push(currentNode);

			currentNode = currentNode.left;
		} else {
			currentNode = stack.pop();

			result.push(currentNode.val);

			currentNode = currentNode.right;
		}
	}

	return result;
}
