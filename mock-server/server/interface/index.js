const fs = require('fs')
const path = require('path')
const cwd = process.cwd()
const listCtrl = require('./controller/list.ctrl')
const setCtrl = require('./controller/set.ctrl')
// const delay = 0
module.exports = function (app, express) {
  const staticPath = path.resolve(__dirname, 'public')
  app.use('/interface-admin/public', express.static(staticPath))
  app.get('/interface-admin/list', listCtrl)
  app.post('/interface-admin/set', setCtrl)
  // router.use('/interface-admin+', function (req, res, next) {
  // res.send('yes')
  // })
}
