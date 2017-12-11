var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1', {no_ready_check: true});
// client.auth('password', function (err) {
//     if (err) throw err;
// });

// client.on('connect', function() {
//     console.log('Connected to Redis');
// });

client.set('mykey', 'myvalue', redis.print)

// console.log(Object.keys(client))