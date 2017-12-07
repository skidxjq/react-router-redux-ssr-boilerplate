import http from 'http'
import express from 'express'

import path from 'path'

const app = express()
const mode = process.env.NODE_ENV
console.log('current NODE_ENV', mode)
if (mode === 'production') {

  app.use('/static', express.static('build'))
} else {
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
app.use('/', require('../routes/index'))
app.use('/home', require('./routes/home'))
app.use('/users', require('../routes/users'))
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