var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.lastElement = 0;
  someInstance.firstElement = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.lastElement] = value;
    this.lastElement++;
  },

  dequeue : function(){
    var result = this.storage[this.firstElement];
    delete(this.storage[this.firstElement]);
    this.firstElement++;
    return result;
  },

  size : function(){
    if(this.lastElement >= this.firstElement){
      return this.lastElement - this.firstElement;
    }
    return 0;  
  }

};



