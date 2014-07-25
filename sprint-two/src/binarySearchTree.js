var makeBinarySearchTree = function(value){
  var binaryTree = {};
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;

  binaryTree.insert = function(inserted) {
    if(inserted > this.value) {
      if(this.right === null) {
        this.right = makeBinarySearchTree(inserted);
      } else {
        this.right.insert(inserted);
      }
    } else if(inserted < this.value) {
      if(this.left === null) {
        this.left = makeBinarySearchTree(inserted);
      } else {
        this.left.insert(inserted);
      }
    }
  };

  binaryTree.contains = function(target) {
    var doesContain = false;
    if(target===this.value){
      doesContain = true;
    } else if(this.right !== null && target > this.value){
      doesContain = this.right.contains(target);
    } else if (this.left !== null){
      doesContain = this.left.contains(target);
    }
    return doesContain;
  };

  binaryTree.depthFirstLog = function(func) {
    func(this.value);
    if(this.left !== null){
      this.left.depthFirstLog(func);
    } else if(this.right!==null){
      this.right.depthFirstLog(func);
    }
  };

  return binaryTree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
