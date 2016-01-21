function Animal(kind, sound, name, age){
  // write code here
  this.kind = kind;
  this.sound = sound;
  this.name = name;
  this.age = age;
}

Animal.prototype.awake = false;
Animal.prototype.wakeUp = function() {
  this.awake = true;
}
Animal.prototype.speak = function() {
  return this.sound;
}
Animal.prototype.feed = function() {
  if(this.awake === true) {
    return "NOM NOM NOM";
  }
}
Animal.prototype.growUp = function() {
  this.age++;
}
Animal.prototype.sleep = function() {
  this.awake = false;
}



module.exports = Animal;
