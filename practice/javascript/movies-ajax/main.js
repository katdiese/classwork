$(document).ready(function(){
  function getMovies(keyword) {
    var url='http://www.omdbapi.com/?s=' + keyword + '&r=json';

    return $.get(url)
      .done(function(res) {
        return res;
      });
      return response;
  }
  console.log(getMovies('star'));
});