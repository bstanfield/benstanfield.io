
# has-transitions

  Determine if an element has transitions

## Installation

    $ component install anthonyshort/has-transitions

## API

    var hasTransitions = require('has-transitions');
    var cssEmitter = require('css-emitter');

    if(hasTransitions(el)) {
      cssEmitter(el).bind(onTransitionEnd);
    }
    else {
      onTransitionEvent();
    }

## Methods

### hasTransitions([el])

Determine if an element has any transition properties. If the browser doesn't
support transitions this will always return false. `el` defaults to `document.body`.

## Properties

### hasTransitions.support

Boolean for whether the browser supports transitions at all

### hasTransitions.property

Get the prefixed property name to use for transitions

## License

  MIT
