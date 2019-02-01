(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("initialize.js", function(exports, require, module) {
'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // do your setup here
    var $ = require('jquery');

    $(document).ready(function () {
        setTimeout(function () {
            $('#jsHide').css('opacity', '1');
        }, 1000);
    });

    // FOR COFFEE
    $(document).ready(function () {
        $('.Cha').append('🔌');
        $('.Wif').append('📡');
        $('.Dri').append('☕️');
        $('.Ser').append('😁');
        $('.Foo').append('🍝');
        $('.Dis').append('🛣');
        $('.All').append('⏰');
        $('.Lar').append('👨‍👩‍👧‍👧');

        $(".g1").click(function () {
            if ($('.explainer:visible').length) $('.explainer').css('display', 'none');else $('.explainer').css('display', 'block');
        });

        $(".g2").click(function () {
            if ($('.explainer2:visible').length) $('.explainer2').css('display', 'none');else $('.explainer2').css('display', 'block');
        });

        $(".explainer2").click(function () {
            $('.explainer2').css('display', 'none');
        });

        $(".explainer").click(function () {
            $('.explainer').css('display', 'none');
        });

        var d = new Date();
        var time = d.getHours();
        if (time >= 20) {
            $('.closes-early').css('opacity', '.5');
            $('.closes-early').append(' (closed)');
        }
    });

    $(document).ready(function () {
        var shopHours = [{
            'PrismCoffee': [{ day: 'Mon', open: 7, close: 21 }, { day: 'Tue', open: 7, close: 21 }, { day: 'Wed', open: 7, close: 21 }, { day: 'Thu', open: 7, close: 21 }, { day: 'Fri', open: 7, close: 21 }, { day: 'Sat', open: 7, close: 21 }, { day: 'Sun', open: 7, close: 21 }],
            'DulceCoffee': [{ day: 'Mon', open: 7, close: 21 }, { day: 'Tue', open: 7, close: 21 }, { day: 'Wed', open: 7, close: 21 }, { day: 'Thu', open: 7, close: 21 }, { day: 'Fri', open: 7, close: 21 }, { day: 'Sat', open: 8, close: 21 }, { day: 'Sun', open: 8, close: 21 }],
            'LoitCafe': [{ day: 'Mon', open: 7, close: 19 }, { day: 'Tue', open: 7, close: 19 }, { day: 'Wed', open: 7, close: 19 }, { day: 'Thu', open: 7, close: 19 }, { day: 'Fri', open: 7, close: 19 }, { day: 'Sat', open: 7, close: 19 }, { day: 'Sun', open: 8, close: 19 }],
            'AlchemistCoffee': [{ day: 'Mon', open: 7.5, close: 22 }, { day: 'Tue', open: 7.5, close: 22 }, { day: 'Wed', open: 7.5, close: 22 }, { day: 'Thu', open: 7.5, close: 22 }, { day: 'Fri', open: 7.5, close: 22 }, { day: 'Sat', open: 7.5, close: 22 }, { day: 'Sun', open: 8, close: 22 }],
            'IgnatiusCafe': [{ day: 'Mon', open: 9, close: 21 }, { day: 'Tue', open: 9, close: 21 }, { day: 'Wed', open: 9, close: 21 }, { day: 'Thu', open: 9, close: 21 }, { day: 'Fri', open: 9, close: 21 }, { day: 'Sat', open: 9, close: 17 }, { day: 'Sun', open: 9, close: 21 }],
            'WithLoveCafe': [{ day: 'Mon', open: 7, close: 17 }, { day: 'Tue', open: 7, close: 17 }, { day: 'Wed', open: 7, close: 17 }, { day: 'Thu', open: 7, close: 17 }, { day: 'Fri', open: 7, close: 17 }, { day: 'Sat', open: 9, close: 17 }, { day: 'Sun', open: 9, close: 17 }],
            'YellowHouseCafe': [{ day: 'Mon', open: 11, close: 24 }, { day: 'Tue', open: 11, close: 24 }, { day: 'Wed', open: 11, close: 24 }, { day: 'Thu', open: 11, close: 24 }, { day: 'Fri', open: 11, close: 26 }, { day: 'Sat', open: 11, close: 26 }, { day: 'Sun', open: 11, close: 24 }],
            'BourgeoisPig': [{ day: 'Mon', open: 8, close: 26 }, { day: 'Tue', open: 8, close: 26 }, { day: 'Wed', open: 8, close: 26 }, { day: 'Thu', open: 8, close: 26 }, { day: 'Fri', open: 8, close: 26 }, { day: 'Sat', open: 8, close: 26 }, { day: 'Sun', open: 8, close: 26 }],
            'NothingButCoffee': [{ day: 'Mon', open: 9, close: 26 }, { day: 'Tue', open: 9, close: 26 }, { day: 'Wed', open: 9, close: 26 }, { day: 'Thu', open: 9, close: 26 }, { day: 'Fri', open: 9, close: 26 }, { day: 'Sat', open: 9, close: 26 }, { day: 'Sun', open: 9, close: 26 }],
            'BricksAndScones': [{ day: 'Mon', open: 8, close: 20 }, { day: 'Tue', open: 8, close: 20 }, { day: 'Wed', open: 8, close: 20 }, { day: 'Thu', open: 8, close: 20 }, { day: 'Fri', open: 8, close: 20 }, { day: 'Sat', open: 8, close: 20 }, { day: 'Sun', open: 8, close: 20 }]
        }];

        var d = new Date();
        var today = d.getDay() - 1;
        var time = d.getHours();

        var storeCloseTimes = function storeCloseTimes(arr) {
            if (today == -1) {
                today = 6;
            }
            delete arr[today].day;
            return arr[today];
        };

        var getHours = function getHours(shop) {
            var hoursArr = Object.values(shop).map(storeCloseTimes);
            return hoursArr;
        };

        var getShopNames = function getShopNames(shop) {
            return Object.keys(shop);
        };

        var names = shopHours.map(getShopNames);
        console.log('Names: ', names);
        // openAndClose looks like: [{open, close}, {}, {}]
        var openAndClose = shopHours.map(getHours);

        var setShopHours = function setShopHours(hours, name) {
            var open = hours[0][name][today].open;
            var close = hours[0][name][today].close;
            var sto = (open + 11) % 12 + 1;
            var stc = (close + 11) % 12 + 1;

            if (sto % 1 != 0) {
                sto = sto.toString();
                sto = sto.slice(0, 1);
                sto = sto + ":30";
            }
            if (stc % 1 != 0) {
                stc = stc.toString();
                stc = stc.slice(0, 1);
                stc = stc + ":30";
            }

            var tomorrowOpen = hours[0][name][d.getDay()].open;
            if (stc >= 1 && stc <= 3) {
                stc = stc + ' AM';
            } else {
                stc = stc + ' PM';
            }

            if (time + 1 === close) {
                $('#' + name + 'Hours').append(' This shop is <strong>closing soon. </strong>');
                $('#' + name + 'Hours').append('(' + sto + ' AM to ' + stc + ')<sup> ?</sup>');
            } else if (time >= open && time < close) {
                $('#' + name + 'Hours').append(' This shop is <strong>open!</strong> ');
                $('#' + name + 'Hours').append('(' + sto + ' AM to ' + stc + ')<sup> ?</sup>');
            } else {
                $('#' + name + 'Hours').append(' This shop is <strong>closed.</strong>');
                $('#' + name + 'Hours').append(' (Opens at ' + tomorrowOpen + ' AM)<sup> ?</sup>');
            }
        };

        names[0].map(function (x) {
            return setShopHours(shopHours, x);
        });

        var todayAsString = d.toString().split(' ')[0];
        var tester = '.' + todayAsString;
        console.log(tester);
        $(tester).css('color', 'green');
        $(tester).css('font-weight', '800');
    });
    // EMOJI TIME
    $(document).ready(function () {
        var d = new Date();
        var min = d.getMinutes();
        var time = d.getHours();
        var hours = (time + 11) % 12 + 1;

        // SILLY REBEL
        if (window.location.href.indexOf("?rebel") > -1) {
            setTimeout(function () {
                $('.emoji').prepend('😎');
                $('#one').append('You still clicked it... I like you.');
                $('#time').append(hours + ' PM' + ':');

                $('#rebelReplace').replaceWith("<p>Hey there! Well, I guess you clicked on my Slack profile... and here we are. What'd you expect? Now <a class='orange' href='https://sparksc.slack.com/app_redirect?channel=ihavealotofworktodo'>GET BACK TO WORK!</a></p> ");
                $('.rebelReplaceHeader').replaceWith("<h1>You rebel...</h1> ");

                $('a').each(function () {
                    $(this).attr("href", "https://sparksc.slack.com/app_redirect?channel=ihavealotofworktodo");
                });
            });
        } else {

            if (time >= 12 && time <= 16) {
                $('.emoji').prepend('📚');
                $('#one').append('Reading a book...');
                $('#time').append(hours + ' PM' + ':');
            } else if (time <= 10 && time >= 5) {
                $('.emoji').prepend('☕️');
                $('#one').append("Brewing coffee...");
                $('#time').append(hours + 'AM' + ':');
            } else if (time >= 18 && time <= 22) {
                $('.emoji').prepend('🏡');
                $('#one').append('Working at a coffee shop...');
                $('#time').append(hours + ' PM' + ':');
            } else if (time >= 20) {
                $('.emoji').prepend('😴');
                $('#time').append(hours + ' PM' + ':');
                $('#one').append('ZzZzz...');
            } else if (time >= 10 && time <= 12) {
                $('.emoji').prepend('📝');
                $('#time').append(hours + ' AM' + ':');
                $('#one').append('Taking notes...');
            } else if (time >= 13 && time < 15) {
                $('.emoji').prepend('🍕');
                $('#one').append('Reheating leftovers...');
                $('#time').append(hours + ' PM' + ':');
            } else if (time == 16) {
                $('.emoji').prepend('🚴');
                $('#one').append('Biking home from class...');
                $('#time').append(hours + ' PM' + ':');
            } else if (time == 17) {
                $('.emoji').prepend('📰');
                $('#one').append('Reading NY Times...');
                $('#time').append(hours + ' PM' + ':');
            } else if (time == 0) {
                $('.emoji').prepend('🌮');
                $('#one').append("Midnight snackin'");
                $('#time').append(hours + ' AM' + ':');
            } else {
                $('.emoji').prepend('👋');
                $('#one').append('Welcome!');
            }
        }
    });

    // BACK TO TOP BTN
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 800) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // STICKY NAV
    if ($('#stick-here').length) {
        var sticktothetop = function sticktothetop() {
            var window_top = $(window).scrollTop();
            var top = $('#stick-here').offset().top;
            if (window_top > top) {
                $('#stickThis').addClass('stick');
                $('#stick-here').height($('#stickThis').outerHeight());
            } else {
                $('#stickThis').removeClass('stick');
                $('#stick-here').height(0);
            }
        };

        $(function () {
            $(window).scroll(sticktothetop);
            sticktothetop();
        });
    }

    // SCROLL-TO-TOP
    $(document).ready(function () {
        $('.scroll-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
        });
    });

    // FADE INS
    $(document).ready(function () {
        $('video').css('opacity', '1');

        var timeout1 = setTimeout(function () {
            $('video').css('opacity', '0');
        }, 19000);

        var timeout2 = setTimeout(function () {
            $('video').attr('src', '../../images/benmoji-sleeping.mp4');
        }, 21000);

        var timeout3 = setTimeout(function () {
            $('video').css('opacity', '1');
        }, 21500);

        $('video').click(function () {
            this.paused ? this.play() : this.pause();
            if (this.paused == true) {
                $('.pauseicon').css('display', 'block');
            } else {
                $('.pauseicon').css('display', 'none');
            }
        });

        setInterval(function () {
            // toggle the class every five second
            $('.pulse').toggleClass('grow');
            setTimeout(function () {
                // toggle back after 1 second
                $('.pulse').toggleClass('grow');
            }, 1200);
        }, 2400);

        setTimeout(function () {
            $('#show').css('opacity', '1');
            $('#hide').css('opacity', '1');
        }, 0);

        setTimeout(function () {
            $('.emoji').css('opacity', '1');
            $('#one').css('opacity', '1');
        }, 0);
    });
});
});

require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map