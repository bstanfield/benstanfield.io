document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');

  var $ = require('jquery');

  // EMOJI TIME
  $(document).ready(function() {
      const d = new Date();
      let min = d.getMinutes();
      let time = d.getHours();

      if (time > 12 && time < 16) {
          $('.emoji').prepend('🌇');
          $('#one').append(' Good afternoon! ');
      } else if (time < 10 && time > 5) {
          $('.emoji').prepend('☕️');
          $('#one').append(" G'morning! Coffee?");
      } else if (time > 16 && time < 20) {
          $('.emoji').prepend('🌃');
          $('#one').append(' Good evening!');
      } else if (time > 20) {
          $('.emoji').prepend('😴');
          $('#one').append(' ZzZzz');
      } else if (time >= 10 && time <= 12) {
          $('.emoji').prepend('🍲');
          $('#one').append(' Reheating leftovers...');
      } else if (time == 16) {
          $('.emoji').prepend('🚴');
          $('#one').append(' Biking home from class...');
      } else {
          $('.emoji').prepend('👋');
          $('#one').append(' Welcome!');
      }
  });

  // STICKY NAV
  function sticktothetop() {
    var window_top = $(window).scrollTop();
    var top = $('#stick-here').offset().top;
    if (window_top > top) {
        $('#stickThis').addClass('stick');
        $('#stick-here').height($('#stickThis').outerHeight());
    } else {
        $('#stickThis').removeClass('stick');
        $('#stick-here').height(0);
    }
    }

    $(function() {
        $(window).scroll(sticktothetop);
        sticktothetop();
    });

  // FADE INS
    $(document).ready(function() {
      setInterval(function(){ 
      // toggle the class every five second
          $('.pulse').toggleClass('grow');  
          setTimeout(function(){
              // toggle back after 1 second
              $('.pulse').toggleClass('grow');  
          },1200);

      },2400);  
      
      setTimeout(
      function() 
      {
          $('#show').css('opacity', '1');
          $('#hide').css('opacity', '1');
      }, 0); 

    
        $('video').css('opacity', '1');

        setTimeout( function(){
            $('video').css('display', 'none');
        }, 9500);

        

      setTimeout(
      function() 
      {
          $('.emoji').css('opacity', '1');
          $('#one').css('opacity', '1');
      }, 0);                    
    });
});
