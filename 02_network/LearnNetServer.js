// ## net module:
// ---------------------------------------------------------------------------------------------------------------------
// 1. asynchronous network wrapper
// 2. methods for creating client & server
// 3. require('net')


// 1. net.createServer([options][, connectionListener])#
// options:
// {
//      allowHalfOpen: false,
//      pauseOnConnect: false
// }

var net = require('net');
var server = net.createServer(function(c){
    console.log('client connected');
    c.on('end', function(){
        console.log('client disconnected');
    })

    c.write('hello\r\n');
    c.pipe(c);


});


server.listen(8124, function(){
    console.log('server bound');
});


// 2. net.connect(options[, connectionListener])
// 3. net.createConnection(options[, connectionListener])
// 4. net.connect(port[, host][, connectListener])#
// 5. net.createConnection(port[, host][, connectListener])#
// 6. net.connect(path[, connectListener])#
// 7. net.createConnection(path[, connectListener])#




// ## net.Server
// ---------------------------------------------------------------------------------------------------------------------
// 1. server.listen(port[, host][, backlog][, callback])
// 2. server.listen(path[, callback])#
// 3. server.listen(handle[, callback])#
// 4. server.listen(options[, callback])#
//   options Object - Required. Supports the following properties:
//    port Number - Optional.
//    host String - Optional.
//    backlog Number - Optional.
//    path String - Optional.
//    exclusive Boolean - Optional.
//    callback Function - Optional.
// 5. server.close([callback])#
// 6. server.address()#
// 7. server.unref()#
// 8. server.ref()#
// 9. server.maxConnections#
// 10.server.connections#
// 11.server.getConnections(callback)#




// 接收连接到host和port的连接,如果host省略,会接收连接到IPv4所有地址的连接
// backlog - maximum length of the pending connections, 默认511
// EADDRINUSE error 表示同一个端口已经被其他端口占用

/*
server.on('error', function (e) {
    if (e.code == 'EADDRINUSE') {
        console.log('Address in use, retrying...');
        setTimeout(function () {
            server.close();
            server.listen(PORT, HOST);
        }, 1000);
    }
});

*/

// event:
// listening - Emitted when the server has been bound after calling server.listen.
// connection - Socket object The connection object, Emitted when a new connection is made. socket is an instance of net.Socket.
// close - Emitted when the server closes. Note that if connections exist, this event is not emitted until all connections are ended.
// error - Emitted when an error occurs. The 'close' event will be called directly following this event. See example in discussion of server.listen.


// ## net.Socket
// ---------------------------------------------------------------------------------------------------------------------
// new net.Socket([options])
// options is an object with the following defaults:
//    { fd: null
//        allowHalfOpen: false,
//            readable: false,
//        writable: false
//    }

// ocket.connect(port[, host][, connectListener])#
// socket.connect(path[, connectListener])#
// socket.bufferSize#
// socket.setEncoding([encoding])#
// socket.write(data[, encoding][, callback])#
// socket.end([data][, encoding])#
// socket.destroy()#
// socket.pause()#
// socket.resume()#
// socket.setTimeout(timeout[, callback])#
// socket.setNoDelay([noDelay])#
// socket.setKeepAlive([enable][, initialDelay])#
// socket.address()#
// socket.unref()#
// socket.ref()#
// socket.remoteAddress#
// socket.remoteFamily#
// socket.remotePort#
// socket.localAddress#
// socket.localPort#
// socket.bytesRead#
// socket.bytesWritten#
// Event: 'lookup'#
// Event: 'connect'#
// Event: 'data'#
// Event: 'end'#
// Event: 'timeout'#
// Event: 'drain'#
// Event: 'error'#
// Event: 'close'#
