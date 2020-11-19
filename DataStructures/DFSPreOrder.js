function DFSPreOrder() {
  let data = [];

  function traverse(node) {
    data.push(node);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(this.root);
  return data;
}
