'use strict'

const SourceMapGenerator = require('source-map').SourceMapGenerator
const SourceMapConsumer  = require('source-map').SourceMapConsumer

function transfer (fromSourceMap, toSourceMap, asString) {
  const smFrom    = new SourceMapConsumer(fromSourceMap)
  const smTo      = new SourceMapConsumer(toSourceMap)
  const smResult  = new SourceMapGenerator({
    file: fromSourceMap.file
  })

  smFrom.eachMapping(function (mapping) {
    const generatedPosition = {
      line: mapping.generatedLine,
      column: mapping.generatedColumn
    }
    const fromOriginalPosition = {
      line: mapping.originalLine,
      column: mapping.originalColumn
    }
    // from's generated position -> to's original position
    const originalPosition = smTo.originalPositionFor(fromOriginalPosition)

    if (originalPosition.source != null) {
      smResult.addMapping({
        source: originalPosition.source,
        name : originalPosition.name,
        generated: generatedPosition,
        original: originalPosition
      })
    }
  })

  return asString ? smResult.toString() : smResult.toJSON()
}

/**
 * Return a re-mapped source map string
 *
 * @param   {object}       [sourceFile]  - The param received by the plugin
 * @param   {string}        compiled     - Processed or compiled code
 * @param   {object|string} sourceMap    - Generated source map
 * @returns {object} The resulting file object with flatten source map, if any.
 */
function flattenBrunchMap (sourceFile, compiled, sourceMap) {
  let asString = false
  let prevMap = sourceFile.map
  let newMap = sourceMap

  // make sure the current map is an object
  if (prevMap && (typeof prevMap == 'string' || prevMap instanceof String)) {
    prevMap = JSON.parse(prevMap)
  }

  const result = { data: compiled }

  if (newMap) {

    // make sure the new map is an object
    if (typeof newMap == 'string' || newMap instanceof String) {
      asString = true
    } else {
      newMap = JSON.stringify(sourceMap)  // normalize
    }
    newMap = JSON.parse(newMap)

    // check the required mappings property
    if (!newMap.mappings) {
      throw new Error('Source map to be applied is missing the "mappings" property')
    }

    // sources defaults to current source file
    if (!newMap.sources || !newMap.sources[0]) {
      newMap.sources = [sourceFile.path]
    }

    // have a valid previous map?
    if (prevMap && prevMap.mappings) {

      if (!newMap.file && prevMap.file) {
        newMap.file = prevMap.file
      }
      result.map = transfer(newMap, prevMap, asString)

    } else {
      // return the received source map already normalized
      result.map = asString ? JSON.stringify(newMap) : newMap
    }

  } else if (prevMap) {
    // no new map, return the previous source map as-is
    result.map = sourceFile.map
  }

  return result
}

module.exports = flattenBrunchMap
