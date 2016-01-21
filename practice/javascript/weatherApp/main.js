$(document).ready(function() {
  $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
    function(json) {
      $("#ip").text("My IP address is: " + json.ip);
    });
//   var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "http://freegeoip.net/json/",
//   "method": "GET"
// }

// $.ajax(settings).done(function (response) {
//   $('#latitude').text('My Latitude: ' + response['latitude']);
//   $('#longitude').text('My Longitude: ' + response['longitude']);
//   console.log(response['longitude']);
// });

var myFn = function() {
  var cityName = $('input[name="location"]').val();
  var settingsWeather = {
    "async": true,
    "crossDomain": true,
    "url": "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=3c438ab921656e7189ededb4dbb9bb82",
    "method": "GET"
  }
  $.ajax(settingsWeather).done(function (response) {
    $('#comment').text(response.weather[0].description);
    console.log(response);
    $('#latitude').text('Latitude: ' + response.coord.lat);
    $('#longitude').text('Longitude: ' + response.coord.lon);
  });
}
myFn();
$('#submit').click(function() {
  myFn();
});

});

// document ready
  // myFn()
  // $('#submit').on('click', myFn)