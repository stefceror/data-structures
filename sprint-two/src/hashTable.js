var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //if there is no bucket
  var bucket = this._storage.get(i);
  if(bucket === undefined){
    //create one
    bucket = [];
    this._storage.set(i,bucket);
  }
  for(var j = 0; j < bucket.length; j++){
  //if key already exists
    if(bucket[j][0] === k){
    //update
      bucket[j][1]=v;
      return;
    }
  }
    //else add tuple
      bucket.push( [k,v] );
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //go to bucket at i
  var bucket = this._storage.get(i);
  //search for key
  for (var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === k){
    //return value
      return bucket[j][1]
    }
  }

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //go to bucket at i
  var bucket = this._storage.get(i);
  //search for key
  for (var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === k){
      //splice out
      bucket[j][1] = null;
      return;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
