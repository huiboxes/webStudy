// 创建一个简单的hHTTP服务器程序

// 加载HTTP模块

var http = require('http')

// 创建一个http服务对象
var server = http.createServer()

// 监听用户的请求事件（request事件）
server.on('request', function (req, res) {
    // 解决乱码：服务器通过设置HTTP响应头，告诉浏览器使用相应的编码来解析网页
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.write('Hello 你好世界')
    // 对于每一个请求，服务器必须结束响应，负责客户端（浏览器）会一直等待服务器响应结束
    res.end()
})

// 启动服务
server.listen(8080, function () {
    console.log('服务器启动了，请访问：http://localhost:8080')
})