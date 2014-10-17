var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.lastElement = 0;
  obj.firstElement = 0;
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.lastElement] = value;
    this.lastElement++;
  },
  dequeue: function(){
    var result = this[this.firstElement];
    delete(this[this.firstElement]);
    this.firstElement++;
    return result;
  },
  size : function(){
    if(this.lastElement >=this.firstElement){
      return this.lastElement - this.firstElement;
    }
    return 0;
  }
};


