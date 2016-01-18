$(window).load(function() {
	// alert('ready for DOM manipulation!');
	$('#secretBox').css('background-color', 'white').append("<h1>secret box!</h1>");
	$('#row1').children("div").addClass("boxType3");
	$('#row4 div:last-child').css('display','none');
	$('.boxType1').css('background-color', 'white');
	$('#row2 div').filter(':nth-child(1), :nth-child(2)').removeClass('box');
	$('div').not(".row, #secretBox").css('width', '2px');
});