var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1', {
  no_ready_check: true
});
client.auth('umbrella', function (err) {
    if (err) throw err;
});

// client.on('connect', function() {
//     console.log('Connected to Redis');
// });

client.get('/m/demo/one:_ga=GA1.1.1763200029.1510125792:{}', function (err, result) {
  if (err) {
    console.log('err', err)
  }
  console.log('result', result)
})
client.set('/m/demo/one:_ga=GA1.1.1763333200029.1510125792:{}', `{"hello":"world"}`, redis.print)

client.hmset("myhashkey",{a:1, b:2, c:'xxx'})
// client.hmget("myhashkey", function(obj) {
//   console.log(obj);
// });

// client.get('/m/demo/one:_ga=GA1.1.1763200029.1510125792:{}', redis.print)
// console.log(Object.keys(client))