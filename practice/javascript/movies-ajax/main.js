$(document).ready(function(){

  $('form').on('submit', function(e){
    e.preventDefault();
    $('#results').empty();
    var keyword = $('input').val();
    var url='http://www.omdbapi.com/?s=' + keyword + '&r=json';


    $.get(url)
      .done(function(res) {
        res.Search.forEach(function(obj){
          $('#results').append('<img src=' + obj.Poster + '>');
        });
        console.log(res);
      });
  });
});