function dogNames(array) {
  if(!array) { return []; }
  return array.map(function (dogObj) {
    return dogObj.name;
  });
}
function dogSize(array, size) {
  //filter returns whole object where size key is equal to size
  var result = array.filter(function(dogObj) {
    return dogObj.size === size;
    //map returns value of the name key in that object
  }).map(function(dogObj) {
    return dogObj.name;
  });
  return result;

}

function bySize(array) {
  //1. We need an object
  //2. in the object, the keys are the sizes
  //3. in the objects, the values are arrays
  //4. in the arrays are just the names of the dogs
  return array.reduce(function(obj, dog){
    console.log('obj is:', {});
    return obj[dog.size];
  }, {});
  //^^^^ is initial state, array takes two args, anonymous function and initial state

}


module.exports = {
  dogNames: dogNames,
  dogSize: dogSize,
  bySize: bySize
}

