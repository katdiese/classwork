var Animal = require('./animal');

function Zoo(location, name) {
  this.location = location;
  this.name = name;
  this.status = 'closed';
  this.animals = [];
 // write code here
}


Zoo.prototype.isOpen = function() {
  if(this.status === 'closed') {
    return false;
  } else {
    return true;
  }
}
Zoo.prototype.open = function() {
  this.status = 'open';
}
Zoo.prototype.close = function() {
  this.status = 'closed';
}

Zoo.prototype.addAnimal = function(animal) {
  var arr = this.animals;
  if(this.status === 'open') {
    if(typeof animal !== "string"){
    this.animals.push(animal);
  }
  }
  return this.animals.length;
}


Zoo.prototype.removeAnimal = function(animal) {
  var str = this.animals
  var index = str.indexOf(animal);
  if(this.status === 'open') {
    str.splice(index, 1);
  }
  return str.length;
}
Zoo.prototype.changeLocation = function(location) {
  this.location = location;
}


module.exports = Zoo;
