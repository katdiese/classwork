$(document).ready(function() {
  $(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        $("#ip").text("My IP address is: " + json.ip);

      }
    );
  });
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://freegeoip.net/json/",
  "method": "GET"
}

$.ajax(settings).done(function (response) {
  $('#latitude').text('Latitude: ' + response['latitude']);
  $('#longitude').text('Longitude: ' + response['longitude']);
  console.log(response['longitude']);
});


});