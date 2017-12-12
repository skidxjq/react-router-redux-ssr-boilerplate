const rClient = require('../utils/redis')
const request = require('request')
const config =
module.exports = function (req, res, next) {
  // console.log(req.url)
  // request(`${REMOTE_URL}${req.url}`).pipe(res)
  var rKey = [
    req.url,
    req.headers.cookie,
    JSON.stringify(req.params)
  ].join(':')
  rClient.getByKey(rKey)
    .then(data => res.json(data))
    .catch(err => {
      return getHttpRemote(req)
    })
    .then(responseBody => {
      rClient.setValue(rKey, JSON.stringify(responseBody))
      res.send(responseBody)
    })
    .catch(err => {
      res.json(Object.assign(err, {
        code: -1,
        msg: err.code
      }))
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
        reject(err)
      }
      resolve(body)
    })
    // r.pipe(res)
  })
}