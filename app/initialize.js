document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
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

  // FOR COFFEE
  $(document).ready(function() {
    $('.dropdown-mobile').click(function () {
        const query = $('.dropdown-mobile > .dropdown-content');
        if (query.is(':visible') === true) {
            $('.dropdown-mobile > .dropdown-content').hide();
        } else {
            $('.dropdown-mobile > .dropdown-content').show();
        }
    });

    $(document).mouseup(function (e) {
        var container = $('.dropdown-mobile');

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.dropdown-mobile > .dropdown-content').hide();
        }
    });

    $('.Cha').append('🔌');
    $('.Wif').append('📡');
    $('.Dri').append('☕️');
    $('.Ser').append('😁');
    $('.Foo').append('🍝');
    $('.Dis').append('🛣');
    $('.All').append('⏰');
    $('.Lar').append('👨‍👩‍👧‍👧');

    $( ".foodEst" ).click(function() {
        if ($(this).find('.explainer').is(':visible'))
            $(this).find('.explainer').first().css('display', 'none');
        else
            $(this).find('.explainer').first().css('display', 'block');
    });
    //
    //
    //
    $( ".shopStatus" ).click(function() {
        if ($(this).find('.explainer2').is(':visible'))
            $(this).find('.explainer2').first().css('display', 'none');
        else
            $(this).find('.explainer2').first().css('display', 'block');
    });

        $( ".explainer2").click(() => {
            $('.explainer2').closest('.explainer2').css('display', 'none');
        })

        $( ".explainer").click(() => {
            $('.explainer').closest('.explainer').css('display', 'none');
        })

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
            { day: 'Sat', open: 8, close: 21},
            { day: 'Sun', open: 8, close: 21},
        ],
        'LoitCafe': [
            { day: 'Mon', open: 7, close: 19},
            { day: 'Tue', open: 7, close: 19},
            { day: 'Wed', open: 7, close: 19},
            { day: 'Thu', open: 7, close: 19},
            { day: 'Fri', open: 7, close: 19},
            { day: 'Sat', open: 7, close: 19},
            { day: 'Sun', open: 8, close: 19},
        ],
        'AlchemistCoffee': [
            { day: 'Mon', open: 7.5, close: 22},
            { day: 'Tue', open: 7.5, close: 22},
            { day: 'Wed', open: 7.5, close: 22},
            { day: 'Thu', open: 7.5, close: 22},
            { day: 'Fri', open: 7.5, close: 22},
            { day: 'Sat', open: 7.5, close: 22},
            { day: 'Sun', open: 8, close: 22},
        ],
        'IgnatiusCafe': [
            { day: 'Mon', open: 9, close: 21},
            { day: 'Tue', open: 9, close: 21},
            { day: 'Wed', open: 9, close: 21},
            { day: 'Thu', open: 9, close: 21},
            { day: 'Fri', open: 9, close: 21},
            { day: 'Sat', open: 9, close: 17},
            { day: 'Sun', open: 9, close: 21},
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
            { day: 'Mon', open: 9, close: 26},
            { day: 'Tue', open: 9, close: 26},
            { day: 'Wed', open: 9, close: 26},
            { day: 'Thu', open: 9, close: 26},
            { day: 'Fri', open: 9, close: 26},
            { day: 'Sat', open: 9, close: 26},
            { day: 'Sun', open: 9, close: 26},
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
        let open = hours[0][name][today].open;
        let close = hours[0][name][today].close;
        let sto = ((open + 11) % 12 + 1);
        let stc = ((close + 11) % 12 + 1);

            if (sto % 1 != 0) {
                sto = sto.toString();
                sto = sto.slice(0,1);
                sto = sto + ":30";
            }
            if (stc % 1 != 0) {
                stc = stc.toString();
                stc = stc.slice(0,1);
                stc = stc + ":30";
            }

        const tomorrowOpen = hours[0][name][(d.getDay())].open;
        if (stc >= 1 && stc <= 3) {
            stc = stc + ' AM';
        } else {
            stc = stc + ' PM';
        }

        if ((time + 1) === close) {
            $('#' + name + 'Hours').append(' This shop is <strong>closing soon. </strong>');
            $('#' + name + 'Hours').append(`(${sto} AM to ${stc})<sup> ?</sup>`);
        } else if (time >= open && time < close) {
            $('#' + name + 'Hours').append(' This shop is <strong>open!</strong> ');
            $('#' + name + 'Hours').append(`(${sto} AM to ${stc})<sup> ?</sup>`);
        } else {
            $('#' + name + 'Hours').append(' This shop is <strong>closed.</strong>');
            $('#' + name + 'Hours').append(` (Opens at ${tomorrowOpen} AM)<sup> ?</sup>`);
        }
    }

    names[0].map(x => setShopHours(shopHours, x));
    
    const todayAsString = d.toString().split(' ')[0];
    const todayAsClass = '.' + todayAsString;
    $(todayAsClass).css('color', 'green');
    
  });
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

        $('.button-clicker').click(() => {
            const psw = document.getElementById('password').value;
            if (['hello', 'password'].indexOf(psw) !== -1) {
                location.href = `/note/youreyesonly/${psw}.html`;
            } else {
                alert('Wrong Password!');
                return false;
            }
        })

    });

  // PASSWORD

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
