const path = require('path')
const fs = require('fs')
const forceRequire = require('require-reload')
const merge = require('deepmerge')
class Interface {
  constructor (req, res, pathname) {
    this.req = req
    this.res = res
    this.pathname = pathname

    this.sharedMap = fs.existsSync(path.resolve(pathname, 'map.json'))
      ? forceRequire(path.resolve(pathname, 'map.json')) : {}
    this.localMap = fs.existsSync(path.resolve(pathname, 'map.local.json'))
      ? forceRequire(path.resolve(pathname, 'map.local.json')) : {}

    typeof this.localMap !== 'object' ? this.localMap = {} : null
    this.map = merge(this.sharedMap, this.localMap)
  }

  isParamsValidate () {
    return true
  }

  render () {
    const {
      isParamsValidate,
      req,
      map,
      getData,
      pathname
    } = this
    if (isParamsValidate(req)) {
      var options = Object.keys(map.keys)
      var selected = map.default ? map.default : map[options[0]]

      return getData(pathname, selected)
    }
  }
  getData (base, pathname) {
    var interfaceFilePath = path.resolve(base, './interface/' + pathname)

    var interfaceLocalFilePath = path.resolve(base, './local/' + pathname)

    var data = forceRequire(interfaceFilePath)
    var localData = fs.existsSync(interfaceLocalFilePath) ? forceRequire(interfaceLocalFilePath) : {}

    return merge(data, localData)
  }

  getDelay () {
    return typeof Number(this.map.delay) === 'number' ? Number(this.map.delay) : 0
  }
}

module.exports = Interface
