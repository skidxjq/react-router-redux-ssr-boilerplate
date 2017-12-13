import io from 'socket.io-client';
import config from '../../config'
export default function socket () {
  var serverUrl = `http://${config.cdnUrl}:${config.httpPort}`
  console.log(serverUrl)
  
  var socket = io(serverUrl)

  socket.on('connect', function () {
    console.log("client connected")
  });
  socket.on('event', function (data) {
    console.log(data)
  });
  socket.on('disconnect', function () {
    console.log('client disconnect')
  });

  return socket
}