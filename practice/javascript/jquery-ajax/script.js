$('#call').click(function() {

  var title = $('#title').val();
  var plot = $('#plot').val();
  var responseType = $('res').val();

  $.ajax({
    url: 'https://www.omdbapi.com/?t='+title+'&y=&plot='+plot+'&r=json'+responseType,
    method: "GET",
    success: function(data) {
      console.log(data);
    }
  });

});


//also works:
// $.get(url, function(data){
//   console.log(data);
// });

$.ajax({
  url: url,
  method: "GET",
  success: function(data) {
    console.log(data);
  }
  error: function(errorObject, textStatus) {
    console.log(errorObject);
    console.log(textStatus);
  }
})