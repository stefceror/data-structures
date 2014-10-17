var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.currSize = 0;
};

Stack.prototype.push = function (value){
  this[this.currSize]=value;
  this.currSize++;
};
Stack.prototype.pop = function(){
  this.currSize && this.currSize--;
  var result = this[this.currSize];
  delete(this[this.currSize]);
  return result;
};
Stack.prototype.size = function(){
  return this.currSize;
};

