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
          $('.emoji').append('🌇');
          $('#one').prepend('Good afternoon! ');
      } else if (time < 10 && time > 5) {
          $('.emoji').append('☕️');
          $('#one').prepend("G'morning! Coffee?");
      } else if (time > 16 && time < 20) {
          $('.emoji').append('🌃');
          $('#one').prepend('Good evening!');
      } else if (time > 20) {
          $('.emoji').append('😴');
          $('#one').prepend('ZzZzz');
      } else if (time >= 10 && time <= 12) {
          $('.emoji').append('🍲');
          $('#one').prepend('Reheating leftovers...');
      } else if (time == 16) {
          $('.emoji').append('🚴');
          $('#one').prepend('Biking home from class...');
      } else {
          $('.emoji').append('👋');
          $('#one').prepend('Welcome!');
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
      }, 1000); 

      setTimeout(
      function() 
      {
          $('.emoji').css('opacity', '1');
          $('#one').css('opacity', '1');
      }, 1500);                    
    });
});
