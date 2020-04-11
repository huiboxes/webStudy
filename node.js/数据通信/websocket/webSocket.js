const http=require('http')
const io=require('socket.io')

// 建立普通HTTP
let server = http.createServer((req,res)=> { })
server.listen(8080)

// 建立ws
let wsServer=io.listen(server)
wsServer.on('connection', sock => {
    // sock.emit('name',数据)
    // sock.on('name',function(数据){})
    sock.on('aaa', function (a, b) {
        console.log(a,b,a+b)
    })

    
})
