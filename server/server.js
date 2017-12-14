import http from 'http'
import express from 'express'

import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import favicon from 'serve-favicon'
import serverDev from './server.dev'
import serverOnline from './server.online'
import request from 'request'
import config from '../config'
import {
  renderProdPage,
  renderDevPage
} from './ssr'
import {
  createSocketConn
} from './utils/socket'
const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())

const isProduction = process.env.NODE_ENV === 'production'
const REMOTE_URL = config.remoteApi
app.use('/remote', require('./routes/remote'))
if (isProduction) {
  app.use('/dist', express.static('dist'))
  app.get('/online', renderProdPage)
} else {
  serverDev(app)
  app.get('/local', renderDevPage)
}
app.use(function (req, res, next) {
  var err = new Error('not found')
  err.status = 404
  next(err)
})
app.use(favicon(path.join(__dirname, '../favicon.ico')))
app.get('/robots.txt', function (req, res, next) {
  res.json({
    'robots': 1
  })
})
app.use(function (err, req, res, next) {
  console.error('from ', req.url, 'error: ', err.message)
  res.status(err.status || 500)
})

const server = http.createServer(app)

// bind socket.io to app
const socketio = createSocketConn(server)
app.set('socketio', socketio)

server.listen(config.httpPort, function () {
  // const address = server.address()
  console.log('server is listening on ip', ' on port ', config.httpPort)
})
