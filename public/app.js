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
    console.log('Initialized app');

    var $ = require('jquery');

    // EMOJI TIME
    $(document).ready(function () {
        var d = new Date();
        var min = d.getMinutes();
        var time = d.getHours();
        var hours = (time + 11) % 12 + 1;

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
        } else if (time >= 10 && time < 12) {
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
        } else {
            $('.emoji').prepend('👋');
            $('#one').append('Welcome!');
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

    $(function () {
        $(window).scroll(sticktothetop);
        sticktothetop();
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