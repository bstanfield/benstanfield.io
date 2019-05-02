document.addEventListener('DOMContentLoaded', () => {
  const $ = require('jquery');

  $(document).ready(() => {
    setTimeout(() => {
        $('.toast').fadeTo(1000, 100);
    }, 1000);

    setTimeout(() => {
        $('.toast').fadeTo(1000, 0).hide();
    }, 30000);
  });

  $('.toast-x').click(() => {
    $('.toast').fadeTo(200, 0).hide();
  });

  $(document).ready(function() {
    setTimeout(function() {
    $('#jsHide').css('opacity', '1');
    }, 1000);
  });

    $('#beginner').click(() => {
        history.pushState(null, null, '?beginner');
        $('.toggle-advanced').fadeOut(300);
        $('.toggle-advanced').fadeTo(300, 0);
        $('.toggle-beginner').fadeIn(300);
        $('.toggle-beginner').fadeTo(1000, 100);
    });

    $('#advanced').click(() => {
        history.pushState(null, null, '?advanced');
        $('.toggle-beginner').fadeOut(300);
        $('.toggle-beginner').fadeTo(300, 0);
        $('.toggle-advanced').fadeIn(300);
        $('.toggle-advanced').fadeTo(1000, 100);
    });

    if (window.location.href.indexOf("?beginner") > -1) {
        $('#beginner').prop("checked", true);
        $('.toggle-advanced').hide();
        $('.toggle-beginner').show();
    } else if (window.location.href.indexOf("?advanced") > -1) {
        $('#advanced').prop("checked", true);
        $('.toggle-beginner').hide();
        $('.toggle-advanced').show();
    } else {
        $('#advanced').prop("checked", true);
        $('.toggle-beginner').hide();
        $('.toggle-advanced').show();
    }

  // EMOJI TIME
  $(document).ready(function() {
      const d = new Date();
      let min = d.getMinutes();
      let time = d.getHours();
      let hours = ((time + 11) % 12 + 1);

      // SILLY REBEL
      if (window.location.href.indexOf("?rebel") > -1) {
          setTimeout(function() {
            $('.emoji').prepend('😎');
            $('#one').append('You still clicked it... I like you.');
            $('#time').append(hours + ' PM' + ':')

            $('#rebelReplace').replaceWith("<p>Hey there! Well, I guess you clicked on my Slack profile... and here we are. What'd you expect? Now <a class='orange' href='https://sparksc.slack.com/app_redirect?channel=ihavealotofworktodo'>GET BACK TO WORK!</a></p> ");
            $('.rebelReplaceHeader').replaceWith("<h1>You rebel...</h1> ");

            $('a').each(function(){ 
              $(this).attr("href", "https://sparksc.slack.com/app_redirect?channel=ihavealotofworktodo")
            });

          });
      } else {

        if (time >= 12 && time <= 16) {
            $('.emoji').prepend('📚');
            $('#one').append('Reading a book...');
            $('#time').append(hours + ' PM' + ':')
        } else if (time <= 10 && time >= 5) {
            $('.emoji').prepend('☕️');
            $('#one').append("Brewing coffee...");
            $('#time').append(hours + 'AM' + ':')
        } else if (time >= 18 && time <= 22) {
            $('.emoji').prepend('🏡');
            $('#one').append('Working at a coffee shop...');
            $('#time').append(hours + ' PM' + ':')
        } else if (time >= 20) {
            $('.emoji').prepend('😴');
            $('#time').append(hours + ' PM' + ':')
            $('#one').append('ZzZzz...');
        } else if (time >= 10 && time <= 12) {
            $('.emoji').prepend('📝');
            $('#time').append(hours + ' AM' + ':')
            $('#one').append('Taking notes...');
        } else if (time >= 13 && time < 15) {
          $('.emoji').prepend('🍕');
          $('#one').append('Reheating leftovers...');
          $('#time').append(hours + ' PM' + ':')
      } else if (time == 16) {
            $('.emoji').prepend('🚴');
            $('#one').append('Biking home from class...');
            $('#time').append(hours + ' PM' + ':')
        } else if (time == 17) {
          $('.emoji').prepend('📰');
          $('#one').append('Reading NY Times...');
          $('#time').append(hours + ' PM' + ':')          
        } else if (time == 0) {
          $('.emoji').prepend('🌮');
          $('#one').append("Midnight snackin'");
          $('#time').append(hours + ' AM' + ':');
        } 
        else {
            $('.emoji').prepend('👋');
            $('#one').append('Welcome!');
        }
      }
  });

  // BACK TO TOP BTN
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // STICKY NAV
  if ($('#stick-here').length ) {
    function sticktothetop() {
        var window_top = $(window).scrollTop();
        var top = $('#stick-here').offset().top;
        if (window_top > top) {
            $('#stickThis').addClass('stick');
            $('.intro').css('margin-top', '75px');
            $('#stick-here').height($('#stickThis').outerHeight());
        } else {
            $('#stickThis').removeClass('stick');
            $('.intro').css('margin-top', '0px');
            $('#stick-here').height(0);
        }
    }

    $(function() {
        $(window).scroll(sticktothetop);
        sticktothetop();
    });
  }

    // SCROLL-TO-TOP
    $(document).ready(function() {
        $('.scroll-to-top').click(function(){
            $('html, body').animate({ scrollTop: 0 }, 800);
        });

        $('.button-clicker').click(() => {
            const psw = document.getElementById('password').value;
            const api_url = `https://${psw}.benstanfield.io`;
            $.ajax({
                url: api_url,
                success: function (xhr) {
                    $('#password').css('border-color', '#5cc624').css('background-color', '#e7f4df');
                    location.href = `https://${psw}.benstanfield.io`;
                },
                error: function (xhr) {
                    $('#password').val('').attr('placeholder', 'Invalid secret code');
                    $('#password').css('border-color', '#f2b7b1').css('background-color', '#f9ebea');
                }
            });
        })

        $(function () {
            $(".input-container input").keypress(function (e) {
                if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
                    $('.button-clicker .orangebutton').click();
                    return false;
                } else {
                    return true;
                }
            });
        });
    });

  // FADE INS
    $(document).ready(function() {
        $('video').click(function(){
            this.paused ? this.play() : this.pause();
            if (this.paused == true) {
                $('.pauseicon').css('display', 'block');
            } else {
                $('.pauseicon').css('display', 'none');
            }
        });
        
        const description = [
            "../../images/benmoji-sunglasses.mp4",
            "../../images/benmoji-sunglasses.mp4",
            "../../images/benmoji-sunglasses.mp4",
            "../../images/benmoji-newglasses.mp4",
            "../../images/benmoji-newglasses.mp4",
            "../../images/benmoji-newglasses.mp4",
            "../../images/benmoji-newglasses.mp4",
            "../../images/benmoji-newglasses.mp4",
            "../../images/benmoji-newglasses.mp4",
            "../../images/benmoji-10s.mp4",
            "../../images/benmoji-10s.mp4"
        ];
        const size = description.length;
        const rand = Math.floor(size *Math.random());
        $('.benmoji').attr('src', description[rand]);

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

      setTimeout(
      function() 
      {
          $('.emoji').css('opacity', '1');
          $('#one').css('opacity', '1');
      }, 0);
    });
});