var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  //create new tree object with value
  var newBranch = makeTree(value);
  //if no array at children, put one there
  if(this.children === undefined){
    this.children = [];
  }
  //push into this.children
  this.children.push(newBranch);

};

treeMethods.contains = function(target){
  var targetFound = false;
  //if value of current tree is target, set found to true
  if(this.value === target){
    targetFound = true;
    //if not recursively check children
  } else if (this.children){
    for(var i = 0; i < this.children.length; i++){
      targetFound = this.children[i].contains(target);
      if(targetFound){
        break;
      }
    }
  }

  return targetFound;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
