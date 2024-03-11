function sumNumbers(root) {
	function depthFirstSearch(node, sum) {
		if (node == null) return 0;
		if (node.left === null && node.right === null) return sum * 10 + node.val;

		return (
			depthFirstSearch(node.left, sum * 10 + node.val) +
			depthFirstSearch(node.right, sum * 10 + node.val)
		);
	}

	return depthFirstSearch(root, 0);
}
