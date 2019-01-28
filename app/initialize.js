document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  var $ = require('jquery');

  // FOR COFFEE
  $(document).ready(function() {
    $('.Cha').append('🔌');
    $('.Wif').append('📡');
    $('.Dri').append('☕️');
    $('.Ser').append('😁');
    $('.Foo').append('🍝');
    $('.Dis').append('🛣');
    $('.All').append('⏰');
    $('.Lar').append('👨‍👩‍👧‍👧');

    $( ".g1" ).click(function() {
        if ($('.explainer:visible').length)
            $('.explainer').css('display', 'none');
        else
            $('.explainer').css('display', 'block');
    });

    const d = new Date();
    let time = d.getHours();
    if (time >= 20) {
        $('.closes-early').css('opacity', '.5');
        $('.closes-early').append(' (closed)');
    }
  });

  $(document).ready(function() {
    const shopHours = [{
        'PrismCoffee': [
            { day: 'Mon', open: 7, close: 21},
            { day: 'Tue', open: 7, close: 21},
            { day: 'Wed', open: 7, close: 21},
            { day: 'Thu', open: 7, close: 21},
            { day: 'Fri', open: 7, close: 21},
            { day: 'Sat', open: 7, close: 21},
            { day: 'Sun', open: 7, close: 21},
        ],
        'DulceCoffee': [
            { day: 'Mon', open: 7, close: 21},
            { day: 'Tue', open: 7, close: 21},
            { day: 'Wed', open: 7, close: 21},
            { day: 'Thu', open: 7, close: 21},
            { day: 'Fri', open: 7, close: 21},
            { day: 'Sat', open: 7, close: 21},
            { day: 'Sun', open: 7, close: 21},
        ],
        'LoitCafe': [
            { day: 'Mon', open: 7, close: 21},
            { day: 'Tue', open: 7, close: 21},
            { day: 'Wed', open: 7, close: 21},
            { day: 'Thu', open: 7, close: 21},
            { day: 'Fri', open: 7, close: 21},
            { day: 'Sat', open: 7, close: 21},
            { day: 'Sun', open: 7, close: 21},
        ],
        'AlchemistCoffee': [
            { day: 'Mon', open: 8, close: 22},
            { day: 'Tue', open: 8, close: 22},
            { day: 'Wed', open: 8, close: 22},
            { day: 'Thu', open: 8, close: 22},
            { day: 'Fri', open: 8, close: 22},
            { day: 'Sat', open: 8, close: 22},
            { day: 'Sun', open: 8, close: 22},
        ],
        'IgnatiusCafe': [
            { day: 'Mon', open: 9, close: 17},
            { day: 'Tue', open: 9, close: 17},
            { day: 'Wed', open: 9, close: 17},
            { day: 'Thu', open: 9, close: 17},
            { day: 'Fri', open: 9, close: 17},
            { day: 'Sat', open: 9, close: 17},
            { day: 'Sun', open: 13, close: 21},
        ],
        'WithLoveCafe': [
            { day: 'Mon', open: 7, close: 17},
            { day: 'Tue', open: 7, close: 17},
            { day: 'Wed', open: 7, close: 17},
            { day: 'Thu', open: 7, close: 17},
            { day: 'Fri', open: 7, close: 17},
            { day: 'Sat', open: 9, close: 17},
            { day: 'Sun', open: 9, close: 17},
        ],
        'YellowHouseCafe': [
            { day: 'Mon', open: 11, close: 24},
            { day: 'Tue', open: 11, close: 24},
            { day: 'Wed', open: 11, close: 24},
            { day: 'Thu', open: 11, close: 24},
            { day: 'Fri', open: 11, close: 26},
            { day: 'Sat', open: 11, close: 26},
            { day: 'Sun', open: 11, close: 24},
        ],
        'BourgeoisPig': [
            { day: 'Mon', open: 8, close: 26},
            { day: 'Tue', open: 8, close: 26},
            { day: 'Wed', open: 8, close: 26},
            { day: 'Thu', open: 8, close: 26},
            { day: 'Fri', open: 8, close: 26},
            { day: 'Sat', open: 8, close: 26},
            { day: 'Sun', open: 8, close: 26},
        ],
        'NothingButCoffee': [
            { day: 'Mon', open: 8, close: 20},
            { day: 'Tue', open: 8, close: 20},
            { day: 'Wed', open: 8, close: 20},
            { day: 'Thu', open: 8, close: 20},
            { day: 'Fri', open: 8, close: 20},
            { day: 'Sat', open: 8, close: 20},
            { day: 'Sun', open: 8, close: 20},
        ],
        'BricksAndScones': [
            { day: 'Mon', open: 8, close: 20},
            { day: 'Tue', open: 8, close: 20},
            { day: 'Wed', open: 8, close: 20},
            { day: 'Thu', open: 8, close: 20},
            { day: 'Fri', open: 8, close: 20},
            { day: 'Sat', open: 8, close: 20},
            { day: 'Sun', open: 8, close: 20},
        ],
    }];

    const d = new Date();
    let today = d.getDay() - 1;
    let time = d.getHours();

    const storeCloseTimes = (arr) => {
        if (today == -1) {
            today = 6;
        }
        delete arr[today].day;
        return arr[today];
    }

    const getHours = (shop) => {
        const hoursArr = Object.values(shop).map(storeCloseTimes);
        return hoursArr;
    }

    const getShopNames = (shop) => {
        return Object.keys(shop);
    }

    const names = shopHours.map(getShopNames);
    console.log('Names: ', names);
    // openAndClose looks like: [{open, close}, {}, {}]
    const openAndClose = shopHours.map(getHours);

    const setShopHours = (hours, name) => {
        const open = hours[0][name][today].open;
        const close = hours[0][name][today].close;
        const tomorrowOpen = hours[0][name][(d.getDay())].open;
        let closeWithMarker = ((close + 11) % 12 + 1);
        if (closeWithMarker >= 1 && closeWithMarker <= 3) {
            closeWithMarker = closeWithMarker + ' AM';
        } else {
            closeWithMarker = closeWithMarker + ' PM';
        }

        if ((time + 1) === close) {
            $('#' + name + 'Hours').append(' This shop is <strong>closing soon. </strong>');
            $('#' + name + 'Hours').append(`(${open} AM to ${closeWithMarker})`);
        } else if (time >= open && time < close) {
            $('#' + name + 'Hours').append(' This shop is <strong>open!</strong> ');
            $('#' + name + 'Hours').append(`(${open} AM to ${closeWithMarker})`);
        } else {
            $('#' + name + 'Hours').append(' This shop is <strong>closed.</strong>');
            $('#' + name + 'Hours').append(` (Opens tomorrow at ${tomorrowOpen})`);
        }
    }

    names[0].map(x => setShopHours(shopHours, x));
  });
  // EMOJI TIME
  $(document).ready(function() {
      const d = new Date();
      let min = d.getMinutes();
      let time = d.getHours();
      let hours = ((time + 11) % 12 + 1);

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
  }

    // SCROLL-TO-TOP
    $(document).ready(function() {
        $('.scroll-to-top').click(function(){
            $('html, body').animate({ scrollTop: 0 }, 800);
        });
    });

  // FADE INS
    $(document).ready(function() {
    $('video').css('opacity', '1');

    var timeout1 = setTimeout( function(){
        $('video').css('opacity', '0');
    }, 19000);

    var timeout2 = setTimeout( function(){
        $('video').attr('src', '../../images/benmoji-sleeping.mp4');
    }, 21000);

    var timeout3 = setTimeout( function() {
        $('video').css('opacity', '1');
    }, 21500);

    $('video').click(function(){
        this.paused ? this.play() : this.pause();
        if (this.paused == true) {
            $('.pauseicon').css('display', 'block');
        } else {
            $('.pauseicon').css('display', 'none');
        }
    });

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
