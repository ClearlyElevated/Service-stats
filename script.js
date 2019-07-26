setInterval(blink, 500);


function blink() {
  $('.blink').each(function(){    
    var backColor = $(this).css('background-color');
    var textColor = $(this).css('color');

    $(this).css( 'background', textColor);
    $(this).css('color', backColor);
  });
};