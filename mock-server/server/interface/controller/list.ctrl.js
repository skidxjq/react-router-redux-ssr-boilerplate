const path = require('path')
const mockPath = path.resolve(__dirname, '../../../data')
const fs = require('fs')
const forceRequire = require('require-reload')
const merge = require('deepmerge')

const reg = /^m\-/
console.log(mockPath)
function getList (req, res) {
  let dirArr = fs.readdirSync(mockPath).filter(dirname => reg.test(dirname))
  let interfaceArr = dirArr.map(dirname => dirname.replace(/\-/g, '/'))

  let resArr = dirArr.map((dirname, index) => {
    let sharedMapPath = path.resolve(mockPath, dirname, 'map.json')
    let localMapPath = path.resolve(mockPath, dirname, 'map.local.json')
    let defaultMap = {
      api: interfaceArr[index],
      keys: {

      },
      default: ''
    }
    let sharedMap = fs.existsSync(sharedMapPath) ? forceRequire(sharedMapPath) : {}
    let localMap = fs.existsSync(localMapPath) ? forceRequire(localMapPath) : {}

    return merge(merge(defaultMap, sharedMap), localMap)
  })

  res.send({
    code: 0,
    msg: '',
    data: resArr
  })
}

module.exports = getList
