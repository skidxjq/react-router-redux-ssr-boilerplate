const fs = require('fs')
const path = require('path')
const cwd = process.cwd()
const forceRequire = require('require-reload')
// const delay = 0
module.exports = function (router) {
  router.use('/m', function (req, res, next) {
    let interfacePath = resolveUrl(req)
    let Data
    if (fs.existsSync(interfacePath + '/index.js')) {
      Data = forceRequire(interfacePath)
    } else if (fs.existsSync(interfacePath)) {
      Data = forceRequire('./Interface')
    } else {
      res.json({
        'code': -1,
        'msg': '没有这个接口',
        'data': {}
      })
    }

    if (typeof Data === 'function') {
      // 由此文件自己去决定自己的渲染逻辑
      if (Data.renderSelf) {
        return res.json(Data(req))
      }
      var data = new Data(req, res, interfacePath)
      var delay = data.getDelay()

      if (delay > 0) {
        setTimeout(() => {
          res.json(data.render())
        }, delay)
      } else {
        res.json(data.render())
      }
    } else if (typeof Data === 'object') {
      res.json(Data)
    } else {
      res.send(Data)
    }
    // res.json({
    //   'value': 1
    // })
    // console.log(1)
  })
}

function resolveUrl (req, symbol = '/') {
  // const reqPath = req.path
  const reqPath = req.baseUrl + req.path

  let pathArr = reqPath.split(symbol)

  let filepath = pathArr
    .filter(unit => !!unit)
    .join('-')
  return path.resolve(__dirname, filepath)
}
