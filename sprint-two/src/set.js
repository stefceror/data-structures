var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // Create storage element if it doesn't exist.
  if(this._storage === undefined) {
    this._storage = [];
  }

  // Push the item if it isn't already in
  // the set.
  if(!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item){
  // Find item in set, and remove it if found.
  for(var i = 0; i < this._storage.length; i++) { // O(n)
    if(this._storage[i] === item) {
      this._storage.splice(i, 1); // Splice is O(n)
      return;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(1)
 * contains: O(n) because one for loop exists in _.contains
 * remove: O(n^2)
 */
