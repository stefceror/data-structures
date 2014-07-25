var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children===undefined){
    this.children=[];
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var targetFound = false;
  if(this.value===target){
    targetFound = true;
  }
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
