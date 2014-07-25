var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined){
    this._storage.set(i, []);
  }
  var bucket = this._storage.get(i);
  var keyValPair = [k,v];
  bucket.push(keyValPair);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var value;
  _.each(bucket, function(item){
    if(item[0]===k){
      value= item[1];
    }
  });
  return value;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  _.each(bucket, function(item, index, bucket){
    if(item[0]===k){
      item[1]=null;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(1); this._storage.set and .get are O(1), too.
 * retrieve: O(1) even though there is a for loop with _.each, number
 *           of elements in that bucket is insignificant compared to n.
 * remove: O(1) for the same reasons as retrieve.
 */
