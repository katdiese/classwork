$(document).ready(function() {
  var computerChoice;
  var playerChoice;
  var playerScore = 0;
    var computerScore = 0;
  $('img').on('click', function(){
    computerChoice = Math.floor(Math.random() * 3) +1;
    console.log(computerChoice);
    findWinner(playerChoice,computerChoice);
  });
  $('#rock').on('click', function(){
    playerChoice = 1;
  });
  $('#paper').on('click', function(){
    playerChoice = 2;
  });
  $('#scissors').on('click', function(){
    playerChoice = 3;
  });
  function findWinner(PC, CC) {
    var choice = [1, 2, 3];
    if(PC === CC) {
      return 0;
    } else if(PC === 3 && CC === 1) {
      computerScore++;
    } else if(PC === 1 && CC === 3) {
      playerScore++;
    } else {
      if(choice.indexOf(PC) > choice.indexOf(CC)) {
        playerScore++;
      } else {
        computerScore++;
      }
    }
    $('#clear').on('click', function(){
    playerScore = 0;
    computerScore= 0;
    $('#playerScore').css('background-color', 'white');
    $('#computerScore').css('background-color', 'white');
    $("#playerScore").html("<h1>Player Score: " + playerScore + "</h1>");
    $("#computerScore").html("<h1>Computer Score: " + computerScore + "</h1>");
  });
    if (playerScore > computerScore) {
      $('#playerScore').css('background-color', 'green');
      $('#computerScore').css('background-color', 'white');
    } else if (computerScore > playerScore) {
      $('#computerScore').css('background-color', 'green');
      $('#playerScore').css('background-color', 'white');
    }
  $("#playerScore").html("<h1>Player Score: " + playerScore + "</h1>");
  $("#computerScore").html("<h1>Computer Score: " + computerScore + "</h1>");


  }


});