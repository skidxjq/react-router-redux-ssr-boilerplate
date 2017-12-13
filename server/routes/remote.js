const rClient = require('../utils/redis')
const request = require('request')
const config = require('../../config')
const REMOTE_URL = config.remoteApi

module.exports = function (req, res, next) {
  // console.log(req.url)
  // request(`${REMOTE_URL}${req.url}`).pipe(res)
  if (req.method === 'POST') {
    request(REMOTE_URL + req.url).pipe(res)
    return
  }
  var rKey = [
    req.url,
    JSON.stringify(req.params)
  ].join(':')
  console.log(rKey)
  rClient.get(rKey, function (err, result) {
    if (err) {
      throw err
    }
    if (result) {
      console.log(result)
      res.json(JSON.parse(result))
      // getHttpRemote(req)
      //   .then(responseBody => {
      //     rClient.setValue(rKey, JSON.stringify(responseBody))
      //   })
      //   .catch(err => {
      //     throw err
      //   })
    } else {
      getHttpRemote(req)
        .then(responseBody => {
          rClient.setValue(rKey, responseBody)
          res.send(responseBody)
        })
        .catch(err => {
          res.json(Object.assign(err, {
            code: -1,
            msg: err.code
          }))
        })
    }
  })
}

function getHttpRemote(req) {
  return new Promise(function (resolve, reject) {
    req.headers['accept'] = 'application/json'
    delete req.headers.host
    let r = request({
      qs: req.body,
      method: req.method,
      url: REMOTE_URL + req.url,
      headers: req.headers
    }, function (err, response, body) {
      if (err) {
        return reject(err)
      }
      if (typeof body === 'object') {
        return resolve(JSON.stringify(body))
      }
      return resolve(body)
    })
    // r.pipe(res)
  })
}