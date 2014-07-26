var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);

    // If tail does exist, set node.next to newNode
    if(list.tail !== null) {
      list.tail.next = newNode;
    }

    // If head does NOT exist, set head to newNode
    if(list.head === null) {
      list.head = newNode;
    }

    list.tail = newNode;
  };

  list.removeHead = function(){
    var returnValue = list.head.value;

    // If there are more elements in list, move
    // head pointer along.
    if (list.head.next) {
      list.head = list.head.next;
    // If there is no next element, reset list
    // to empty.
    } else {
      list.head = null;
      list.tail = null;
    }

    return returnValue;
  };

  list.contains = function(target){
    var currentNode = list.head;
    var targetFound = false;

    while(currentNode && !targetFound) {
      if(currentNode.value === target) {
        targetFound = true;
      }
      currentNode = currentNode.next;
    }

    return targetFound;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 */
