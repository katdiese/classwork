// add scripts

$(document).on('ready', function() {
  // console.log('sanity check!');
  seedLocalStorage();
  addDataFromLocalStorageToDOM();
  $('table').on('click', '#increment', function() {
    var button = this;
    console.log($(button).attr('data-name'));
    //get data from local storage
    var currentStateOfLocalStorage = JSON.parse(localStorage.getItem('items'));
    //increment quantity associate with the specific item
    for(var i = 0; i < currentStateOfLocalStorage; i++) {
      if(currentStateOfLocalStorage[i].name === itemName) {
        currentStateOfLocalStorage[i].quantity++;
      }
      newArray.push(currentStateOfLocalStorage[i]);
    }
    //set item back to local storage
    localStorage.setItem('items', JSON.stringify(newArray));
    //update the DOM
    addDataFromLocalStorageToDOM();
  });
});


function seedLocalStorage() {
  var data = [
    {
      name: 't-shirt',
      amount: 20.89,
      quantity: 0
    },
    {
      name: 'pants',
      amount: 21.00,
      quantity: 0
    },
    {
      name: 'hat',
      amount: '41.50',
      quantity: 0
    },
  ];
  if(!JSON.parse(localStorage.getItem('items'))) {
    localStorage.setItem('items', JSON.stringify(data));
  }
}

function addDataFromLocalStorageToDOM() {
  $('#allItems').empty();
  var allItems = JSON.parse(localStorage.getItem('items'));
  allItems.forEach(function(obj) {
    $('.table').append('<tr><td>' + obj.name + '</td><<td>' + obj.amount + '</td><td>' + obj.quantity + '</td><td><button class="btn btn-sm btn-primary" data-name="' + obj.name + '" id="increment">+</button></td></tr>');
  })
}