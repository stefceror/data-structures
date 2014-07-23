var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.currentSize = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.currentSize] = value;
    this.currentSize++;
  },

  pop: function(){
    this.currentSize && this.currentSize--;
    var result = this.storage[this.currentSize];
    delete this.storage[this.currentSize];
    return result;
  },

  size: function(){
    return this.currentSize;
  }
};


