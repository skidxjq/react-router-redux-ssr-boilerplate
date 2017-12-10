import http from 'http'
import express from 'express'

import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import serverDev from './server.dev'
import serverOnline from './server.online'
import request from 'request'
import {
  renderProdPage,
  renderDevPage
} from './ssr'

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())

const isProduction = process.env.NODE_ENV === 'production'
const REMOTE_URL = 'http://localhost:55555'
app.use('/remote', function (req, res, next) {
  // console.log(req.url)
  // request(`${REMOTE_URL}${req.url}`).pipe(res)
  req.headers['accept'] = 'application/json'
  delete req.headers.host
  let r = request({
    qs: req.body,
    method: req.method,
    url: REMOTE_URL + req.url,
    headers: req.headers
  }, function (err) {
    if (err) {
      console.log(err)
      res.json(Object.assign(err, {
        code: -1,
        msg: err.code
      }))
    }
  })
  r.pipe(res)
})
if (isProduction) {

  app.use('/dist', express.static('dist'))
  app.get('*', renderProdPage)
} else {
  serverDev(app);
  app.get('*', renderDevPage)
  // const webpack = require('webpack');
  // const dev
  // const renderDev = require('./server.dev')

  // renderDev(app)
  // app.get('*', renderDev.renderPage)
  // app.get('/home', homeRouter)
  // app.use('/', require('../routes/index'))
  // app.use('/users', require('../routes/users'))
}

// app.use('/home', require('./routes/home'))
// app.use('/', require('../routes/index'))
// app.use('/home', require('./routes/home'))
// app.use('/users', require('../routes/users'))
app.use(function (req, res, next) {
  var err = new Error('not found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res, next) {
  console.error('error: ', err.message)
  res.status(err.status || 500)
})

const server = http.createServer(app)
var port = 12345
server.listen(port, function () {
  // const address = server.address()
  console.log('server is listening on ip', ' on port ', port)
})