var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.right = null;
  newTree.left = null;
  
  newTree.insert = function(value){
    //if value > this.value insert at right
    if(value > this.value){
      if(this.right === null){
        this.right = makeBinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    //else if < insert at left
    } else if (value < this.value){
      if(this.left === null){
        this.left = makeBinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
  };

  newTree.contains = function(target){
    var found = false;
    //if this node is the target set found to true
    if(this.value === target){
      found = true;
    //else if larger check right branch
    } else if(target > this.value && this.right){
      found = this.right.contains(target);
    //else if smaller check left branch
    } else if (target < this.value && this.left){
      found = this.left.contains(target);
    }
    return found;
  };

  newTree.depthFirstLog = function(func){
    func(this.value);
    if(this.left){
      this.left.depthFirstLog(func);
    } else if(this.right){
      this.right.depthFirstLog(func);
    }

  };
  
  return newTree;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
