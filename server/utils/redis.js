import Redis from 'redis'
import config from '../../config'
console.log(config)
const client = Redis.createClient(config.redisPort, config.redisUrl)

client.auth(config.redisPassword, function () {
  console.log('redis connected')
})
client.on('error', function (err) {
  console.log(err)
  // throw (err)
})
client.print = Redis.print
export default client

// client.getByKey = function getRedisByKey(key) {
//   return new Promise(function (resolve, reject) {
//     if (key) {
//       client.get(key, function (err, result) {
//         if (err) {
//           return reject('error')
//         }
//         if (result) {
//           return resolve(result)
//         }
//       })
//     }
//     return reject('empty')
//   })
// }


// client.setValue = function setByKey(key, value) {
//   return new Promise(function (resolve, reject) {
//     if (key && value) {
//       client.set(key, value, function (err, result) {
//         if (err) {
//           return reject('error')
//         }
//         if (result) {
//           return resolve(result)
//         }
//       })
//     }
//     return reject('key or value is empty')
//   })
// }