var Graph = function(){
  this.nodes = [];
};

var Node = function(value) {
  this.value = value;
  this.connections = [];
};

Graph.prototype.addNode = function(newNode, toNode){
  // Enforces connections
  if(this.contains(toNode) || (this.nodes.length < 2 && toNode === undefined)) {
    // Prevent duplication
    if(!this.contains(newNode)) {
      this.nodes[this.nodes.length] = new Node(newNode);
    }
  }

  var toValue = toNode;

  // When second node is added connect to first node
  if(this.nodes.length === 2) {
    toValue = this.nodes[0].value;
  }
  // Adds requisite connections
  if(this.nodes.length > 1) {
    this.addEdge(newNode, toValue);
  }
};

Graph.prototype.contains = function(node){
  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  // Searches for node object
  for(var i = 0; i < this.nodes.length; i++) { // O(n)
    if(this.nodes[i].value === node) {
      // Remove edges
      for(var j = 0; j < this.nodes[i].connections.length; j++) {
        this.removeEdge(this.nodes[i].value, this.nodes[i].connections[j].value);
      }
      // Removes node
      this.nodes.splice(i, 1); //  Splice is O(n)
    }
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  // Searches for node object
  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].value === fromNode) {
      // Checking edges on the node
      for(var j = 0; j < this.nodes[i].connections.length; j++) {
        // Checking if it's the target edge
        if(this.nodes[i].connections[j].value === toNode) {
          return true;
        }
      }
    }
  }

  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var nodeFrom;
  var nodeTo;

  // Look up node objects from value parameters
  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].value === fromNode) {
      nodeFrom = this.nodes[i];
    }
    if(this.nodes[i].value === toNode) {
      nodeTo = this.nodes[i];
    }
  }
  // Add connections
  nodeFrom.connections.push(nodeTo);
  nodeTo.connections.push(nodeFrom);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var nodeFrom;
  var nodeTo;
  // Look up node objects from value parameters
  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].value === fromNode) {
      nodeFrom = this.nodes[i];
    }
    if(this.nodes[i].value === toNode) {
      nodeTo = this.nodes[i];
    }
  }

  // Remove toNode connection from fromNode
  for(var i = 0; i < nodeFrom.connections.length; i++) {
    if(nodeFrom.connections[i].value === toNode) {
      nodeFrom.connections.splice(i, 1);
    }
  }

  // Remove fromNode connection from toNode
  for(var i = 0; i < nodeTo.connections.length; i++) {
    if(nodeTo.connections[i].value === fromNode) {
      nodeTo.connections.splice(i, 1);
    }
  }

  // Remove nodes that have no connections
  if(nodeFrom.connections.length === 0) {
    this.removeNode(fromNode);
  }
  if(nodeTo.connections.length === 0) {
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(n) because contains and addEdge are used
 * contains: O(n)
 * removeNode: O(n^2)
 * getEdge: O(n^2)
 * addEdge: O(n)
 * removeEdge: O(n^2)
 */
