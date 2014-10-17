var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var firstElement = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var result = storage[firstElement];
    delete(storage[firstElement]);
    firstElement++;
    return result;
  };

  someInstance.size = function(){
    if(size >= firstElement){
      return size - firstElement;
    }
    return 0;  
  };

  return someInstance;
};
