var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;

  // Extend newTree's properties with treeMethods'.
  _.extend(newTree, treeMethods);

  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  // Create children container if one doesn't exist.
  if(this.children===undefined){
    this.children=[];
  }

  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var targetFound = false;

  // Checks if this node is the target
  if(this.value===target){
    targetFound = true;
  }

  // Iterate through children if they exist, and
  // check if they're the target.
  if(this.children){
    for(var i=0; i< this.children.length; i++){
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
 * addChild: O(1)
 * contains: O(n) because each tree is only checked once
 */
