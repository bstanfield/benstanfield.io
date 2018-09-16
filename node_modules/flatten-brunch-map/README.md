[![npm Version][npm-image]][npm-url]
[![License][license-image]][license-url]

# flatten-brunch-map

Creates the object to return by a [Brunch](http://brunch.io) plugin, with the new sourcemap merged with the preceding sourcemap if necessary.

## Install

```bash
npm install flatten-brunch-map --save
```

## Usage

```js
const flattenMap = require('flatten-brunch-map')
...
const pluginResult = flattenMap(fileParam, compiledCode, sourceMap)
```

## Example

```js
const flattenMap = require('flatten-brunch-map')
const myCompiler = require('myCompiler')

class MyPlugin {

  constructor (config) {
    this.options = config.plugins.myPlugin || {}
    // Tell to myCompiler if user wants sourcemap
    this.options.sourceMaps = !!config.sourceMaps
  }

  compile (file) {
    return new Promise((resolve, reject) => {
      try {
        // Do the plugin logic and then call flattenMap with the
        // received param and the generated code and sourcemap.
        const output = myCompiler(file.data, this.options)
        const result = this.options.sourceMaps
                     ? flattenMap(file, output.code, output.map) : output.code

        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  }

}

MyPlugin.prototype.brunchPlugin = true
MyPlugin.prototype.extension = 'js'
MyPlugin.prototype.type = 'javascript'

module.exports = MyPlugin
```


## What's New

From v2.8.2, the plugin returns a normalized string or plain object with `sources` defaulting to the received file path.

---
Like it? Don't forget your star.

[npm-image]:      https://img.shields.io/npm/v/flatten-brunch-map.svg
[npm-url]:        https://www.npmjs.com/package/flatten-brunch-map
[license-image]:  https://img.shields.io/npm/l/express.svg
[license-url]:    https://github.com/aMarCruz/flatten-brunch-map/blob/master/LICENSE
