var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.firstElement = 0;
  this.lastElement = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.lastElement] = value;
  this.lastElement++;
};

Queue.prototype.dequeue = function() {
  var result = this[this.firstElement];
  delete this[this.firstElement];
  this.firstElement++;
  return result;
};

Queue.prototype.size = function() {
  if (this.lastElement >= this.firstElement) {
    return this.lastElement - this.firstElement;
  }
  return 0;
};
