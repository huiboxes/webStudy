var http = require('http')

http.createServer(function(req,res){
    /******************** resquest *********/
    // 获取所有请求头
    // console.log(req.headers) 返回的是一个对象，这个对象中包含了所有的请求头
    // rawHeaders 返回的是一个数组，数组中保存的都是请求头的字符串
    // httpVersion 获取客户端使用的http版本
    // method 获取客户端请求使用的方法
    // url 获取这次请求的路径
    
    /************* response *********/
    // res.write
    // Res.end 每次响应都必须调用，告诉服务器该响应的响应完了，可以结束（不是立即结束响应）
    // 如果传了data相当于调用了write再调用end,数据必须是String或者Buffer类型
    // 通过res.setHeader 来设置响应头 
    // 要放在 write和 end之前，因为不设置的话系统会将默认的响应头发送给浏览器，已经发送过就不能再通过res.setHeader设置
    // res.statusCode 设置HTTP响应状态码
    // res.statusMessage 设置响应码对应的消息
    // res.writeHead 直接向客户端写入响应头 没有手动调用的话，系统发送前会自动发送
    



    res.end('over')
}).listen(8080,function(){
    console.log('8080')
})