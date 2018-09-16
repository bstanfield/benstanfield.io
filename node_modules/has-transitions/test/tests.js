var has = require('has-transitions');
var assert = require('assert');

describe('has-transitions', function(){
  var el;

  beforeEach(function(){
    el = document.createElement('div');
    document.body.appendChild(el);
  });

  afterEach(function(){
    document.body.removeChild(el);
  });

  it('should determine if the browser supports transitions', function(){
    assert( has() === true );
  });

  it('should know when an element has transitions from inline styles', function(){
    el.style.webkitTransition = "all 1s";
    el.style.MozTransition = "all 1s";
    el.style.transition = "all 1s";
    assert( has(el) === true );
  });

  it('should know when an element has transitions from a class', function(){
    el.className = "transition";
    assert( has(el) === true );
    el.className = "";
    assert( has(el) === false );
  });

  it("should know when an element doesn't have transitions", function(){
    assert( has(el) === false );
  });

});