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
require.register("includes/footer.pug", function(exports, require, module) {
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"app\u002Fincludes\u002Ffooter.pug":".container"};
;pug_debug_line = 1;pug_debug_filename = "app\u002Fincludes\u002Ffooter.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
module.exports = template;
});

;require.register("includes/head.pug", function(exports, require, module) {
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"app\u002Fincludes\u002Fhead.pug":"head.\n  \u003Cmeta charset=\"utf-8\"\u003E\n  \u003Cmeta name=\"viewport\" content=\"width=device-width\"\u003E\n  \u003Ctitle\u003EBrunch\u003C\u002Ftitle\u003E\n  \u003Clink rel=\"stylesheet\" href=\"\u002Fapp.css\"\u003E\n  \u003Cscript src=\"\u002Fvendor.js\"\u003E\u003C\u002Fscript\u003E\n  \u003Cscript src=\"\u002Fapp.js\"\u003E\u003C\u002Fscript\u003E\n  \u003Cscript\u003Erequire('initialize');\u003C\u002Fscript\u003E\n\n \u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=IBM+Plex+Sans:400,400i,500,500i,700,700i|IBM+Plex+Serif:400,400i,500,500i,700,700i&amp;subset=latin-ext\" rel=\"stylesheet\"\u003E"};
;pug_debug_line = 1;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 2;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + " \u003Cmeta charset=\"utf-8\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 3;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + " \u003Cmeta name=\"viewport\" content=\"width=device-width\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 4;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + " \u003Ctitle\u003EBrunch\u003C\u002Ftitle\u003E";
;pug_debug_line = 5;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 5;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + " \u003Clink rel=\"stylesheet\" href=\"\u002Fapp.css\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 6;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + " \u003Cscript src=\"\u002Fvendor.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 7;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 7;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + " \u003Cscript src=\"\u002Fapp.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 8;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 8;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + " \u003Cscript\u003Erequire('initialize');\u003C\u002Fscript\u003E";
;pug_debug_line = 9;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 9;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "";
;pug_debug_line = 10;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 10;pug_debug_filename = "app\u002Fincludes\u002Fhead.pug";
pug_html = pug_html + "\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=IBM+Plex+Sans:400,400i,500,500i,700,700i|IBM+Plex+Serif:400,400i,500,500i,700,700i&amp;subset=latin-ext\" rel=\"stylesheet\"\u003E\u003C\u002Fhead\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
module.exports = template;
});

;require.register("includes/nav.pug", function(exports, require, module) {
function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"app\u002Fincludes\u002Fnav.pug":"   \n.container-wide.mobile-full\n    .hero\n        .grid-bg\n            img#first(src=\"images\u002Fpersonalsite-assets.png\")\n            img#second(src=\"images\u002Fpersonalsite-assets-2.png\")\n\n    #stick-here\n    .nav#stickThis\n        .nav-content    \n            a(href=\"\u002F\").left#name Ben Stanfield\n            .right.nav-links\n                a(href=\"\u002F\") About\n                a(href=\"\u002F\") Portfolio\n                a(href=\"\u002F\") Resume\n                a(href=\"\u002F\") Education\n                a(href=\"\u002F\") Blog\n\n\nscript.\n    var s1 = document.querySelector('#s1');\n    let animationDuration = 10;\n    console.log(\"Test\");\n\n    \n    function set(animationDuration) {\n         s1.style.setProperty('--animation-time', animationDuration + 's');\n    }\n\n    set(animationDuration);\n\n    function changeAnimationTime() {\n        animationDuration = Math.random() * 10;\n        let newDuration = animationDuration;\n        set(animationDuration);\n        console.log(\"durTransform: \", (Math.round(animationDuration * 1000)));\n        return newDuration;\n    }\n    console.log(\"newDuration: \", newDuration);\n\n    setInterval(changeAnimationTime, newDuration);\n    \u002F\u002F console.log((Math.round(newDuration * 1000)));"};
;pug_debug_line = 1;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "  ";
;pug_debug_line = 2;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"container-wide mobile-full\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"hero\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"grid-bg\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cimg id=\"first\" src=\"images\u002Fpersonalsite-assets.png\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cimg id=\"second\" src=\"images\u002Fpersonalsite-assets-2.png\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv id=\"stick-here\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav\" id=\"stickThis\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-content\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "   ";
;pug_debug_line = 11;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca class=\"left\" href=\"\u002F\" id=\"name\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "Ben Stanfield\u003C\u002Fa\u003E";
;pug_debug_line = 12;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cdiv class=\"right nav-links\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca href=\"\u002F\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "About\u003C\u002Fa\u003E";
;pug_debug_line = 14;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca href=\"\u002F\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "Portfolio\u003C\u002Fa\u003E";
;pug_debug_line = 15;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca href=\"\u002F\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "Resume\u003C\u002Fa\u003E";
;pug_debug_line = 16;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca href=\"\u002F\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "Education\u003C\u002Fa\u003E";
;pug_debug_line = 17;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Ca href=\"\u002F\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "Blog\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 21;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "var s1 = document.querySelector('#s1');";
;pug_debug_line = 22;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 22;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "let animationDuration = 10;";
;pug_debug_line = 23;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 23;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "console.log(\"Test\");";
;pug_debug_line = 24;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 24;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "";
;pug_debug_line = 25;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 25;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "";
;pug_debug_line = 26;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 26;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "function set(animationDuration) {";
;pug_debug_line = 27;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 27;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "     s1.style.setProperty('--animation-time', animationDuration + 's');";
;pug_debug_line = 28;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 28;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "}";
;pug_debug_line = 29;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 29;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "";
;pug_debug_line = 30;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 30;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "set(animationDuration);";
;pug_debug_line = 31;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 31;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "";
;pug_debug_line = 32;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 32;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "function changeAnimationTime() {";
;pug_debug_line = 33;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 33;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "    animationDuration = Math.random() * 10;";
;pug_debug_line = 34;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 34;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "    let newDuration = animationDuration;";
;pug_debug_line = 35;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 35;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "    set(animationDuration);";
;pug_debug_line = 36;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 36;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "    console.log(\"durTransform: \", (Math.round(animationDuration * 1000)));";
;pug_debug_line = 37;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 37;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "    return newDuration;";
;pug_debug_line = 38;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 38;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "}";
;pug_debug_line = 39;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 39;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "console.log(\"newDuration: \", newDuration);";
;pug_debug_line = 40;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 40;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "";
;pug_debug_line = 41;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 41;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "setInterval(changeAnimationTime, newDuration);";
;pug_debug_line = 42;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 42;pug_debug_filename = "app\u002Fincludes\u002Fnav.pug";
pug_html = pug_html + "\u002F\u002F console.log((Math.round(newDuration * 1000)));\u003C\u002Fscript\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;};
module.exports = template;
});

require.register("initialize.js", function(exports, require, module) {
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // do your setup here
  console.log('Initialized app');

  var $ = require('jquery');
});
});

require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map