// 个别根据用户的不同请求，服务器做出不同的响应
// 1、加载HTTP模块
var http = require('http')

// 创建HTTP服务
http.createServer(function(req,res){
    // 设置响应头
    res.setHeader('Content-Type','text/html;charset=utf8')
    // 获取用户请求的路径req.url
    if(req.url === '/' || req.url === '/index.html'){
        res.end('hi')
    }else if(req.url === '/login'){
       res.end('hello login')
    }else{
       res.end('404')
    }


}).listen(8080,function(){
    console.log('http://localhost:8080')
})