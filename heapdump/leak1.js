const heapdump = require('heapdump')
let leakObject = null
let count = 0

setInterval(function testMemoryLeak () {
  const originLeakObject = leakObject
  const unused = function () {
    if (originLeakObject) {
      console.log('originLeakObject')
    }
  }
  leakObject = {
    count: String(count++),
    leakStr: new Array(1e6).join('*'),
    leakMethod: function () {
      console.log('leakMessage')
    }
  }
}, 1000)

// memwatch.on('leak', (info) => {
setTimeout(() => {
  heapdump.writeSnapShot((err, filename) => {
    if (err) console.err(err)
    else console.error('wrote to snapshot:', filename)
  })
}, 30000)

// })
