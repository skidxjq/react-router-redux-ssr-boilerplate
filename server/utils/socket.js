import SocketIO from 'socket.io'
export function createSocketConn(server) {
  if (server)
    var io = SocketIO(server)
  console.log('come into socket')
  io.on('connection', function (socket) {
    console.log('socket connected on ', socket.id)
  })

  return io
}