// net.connect(options[, conectionListener])
// net.createConnection(option[, connectionListener])
// 返回一个net.Socket对象,同时连接制定IP和端口
// 建立连接之后会翻出connect事件
// options 中的内容
//   port - 连接指向的端口,必须字段
//   host - 连接指向的地址,默认是localhost
//   localAddress - 连接绑定的本地网络接口
//   localPort - 连接绑定的本地端口
//   family - IP栈版本，默认是4
// 对本地域来说
//   path - 客户端连接的路径,必须字段
// 通用选项
//   allowHalfOpen - @todo

var net = require('net');

var client = net.connect({port: 8124}, function(){
    console.log('connected to server!') ;
    //client.write('world!\r\n');

});


client.on('data', function(data){
    console.log(data.toString());
    client.end();
});

client.on('end', function(){
    console.log('disconnected from server');
});

// net.connect(port[, host][, connectListener]);
// net.createConnection(port[, host][, connectionListener]);
// net.connect(path[. connectListener])
// net.createConnection(path[, connectListener]);