var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var hash = getIndexBelowMaxForKey(key, this._limit);

  // Make a bucket if one doesn't exist.
  if(this._storage.get(hash) === undefined){
    this._storage.set(hash, []);
  }

  var bucket = this._storage.get(hash);

  if(this.retrieve(key)) {
    _.each(bucket, function(item, index, bucket){
      if(item[0] === key){
        item[1] = value;
      }
    });
  } else {
    var keyValPair = [key, value];
    bucket.push(keyValPair);
  }
};

HashTable.prototype.retrieve = function(key){
  var hash = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(hash);
  var value;

  // Check each item in bucket to see if key matches.
  _.each(bucket, function(item){
    if(item[0] === key){
      value = item[1];
    }
  });

  return value;
};

HashTable.prototype.remove = function(key){
  var hash = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(hash);

  // Find appropriate key and set value to null.
  _.each(bucket, function(item, index, bucket){
    if(item[0] === key){
      item[1] = null;
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
