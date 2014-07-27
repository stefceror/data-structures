var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //create new node at tail
    var newNode = makeNode(value);
    if(this.tail !== null){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    //if head null, set to node
    if(this.head === null){
      this.head = newNode;
    }
  };

  list.removeHead = function(){
    //save old head;
    var oldHead= this.head;
    //set head to next item in list if it exists
    if(oldHead.next){
      this.head = oldHead.next;
    //if not, set list to be empty
    } else{
      this.head = null;
      this.tail = null;
    }
    return oldHead.value; 
  };

  list.contains = function(target){
    //start at head
    var currNode = this.head;
    //check each node that exists
    while(currNode){
      if(currNode.value === target){
        //if target return true
        return true;
      //if not found return false
      } else {
        currNode = currNode.next;
      }
    }
    return false;
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
 */
