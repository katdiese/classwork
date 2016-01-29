// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  Stripe.setPublishableKey('pk_test_qTUefj2nI8xWoSMQTRB9IQAl');
  $('.order').on('click',function() {
  var cardInfo = {
  number: $('.card-number').val(),
  cvc: $('.card-cvc').val(),
  exp_month: $('.card-expiry').val().split('/')[0],
  exp_year: $('.card-expiry').val().split('/')[1]
}
  Stripe.card.createToken(cardInfo, stripeResponseHandler);
});


//checks if card number is valid when mouse leaves text box, changes color if not valid
  $('.card-number').on('blur', function(){
    //do stuff
  var cardNum = $('.card-number')
  if(!Stripe.card.validateCardNumber(cardNum.val())) {
    cardNum.css('background-color', 'red');
  } else {
    cardNum.css('background-color', 'green');
  }
  });

  $('.card-cvc').on('blur', function() {
    var cvc = $('.card-cvc');
    if(!Stripe.card.validateCVC(cvc.val())) {
    cvc.css('background-color', 'red');
  } else {
    cvc.css('background-color', 'green');
  }
  });

  $('.card-expiry').on('blur', function() {
    var exp = $('.card-expiry');
    var expMonth = exp.val().split('/')[0];
    var expYear = exp.val().split('/')[1];
    if(!Stripe.card.validateExpiry(expMonth, expYear)) {
    exp.css('background-color', 'red');
  } else {
    exp.css('background-color', 'green');
  }
  });


  function stripeResponseHandler(status, response) {
    if (response.error) {
      console.log(response.error.message);
    } else {
      console.log(response.id);
    }
  }
});


