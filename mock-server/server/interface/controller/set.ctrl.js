const path = require('path')
const mockPath = path.resolve(__dirname, '../../../data')
const fs = require('fs')
const forceRequire = require('require-reload')
const merge = require('deepmerge')

function set (req, res) {
  let { api, key } = req.body
  let oldState = {}
  let interfacePath = restorePath(getInterface(req.body.api))
  let subCategory = getSubCategory(req.body.api)

  let localMapFilePath = path.resolve(mockPath, interfacePath, 'map.local.json')
  if (fs.existsSync(localMapFilePath)) {
    oldState = forceRequire(localMapFilePath)
  }
  var partialState = getPartialState(req.body, subCategory)

  var newState = merge(oldState, partialState)

  fs.writeFileSync(localMapFilePath, JSON.stringify(newState))
  res.json({
    code: 0,
    msg: 'ok'
  })
}

function restorePath (api) {
  return api.replace(/\//g, '-')
}

function getPartialState (data, subCategory) {
  if (!subCategory) {
    return {
      default: data.key
    }
  }
  return {
    default: {
      [`${subCategory}`]: data.key
    }
  }
}

function getInterface (api) {
  var categories = api.split('##')
  return categories[0]
}

function getSubCategory (api) {
  var categories = api.split('##')
  if (categories.length > 1) {
    return categories[categories.length - 1]
  }

  return null
}
module.exports = set
