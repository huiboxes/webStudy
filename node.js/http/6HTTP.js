// 根据用户不用请求，做出不同响应
var http = require('http')
var fs = require('fs')
var path = require('path')

// 创建HTTP服务
http.createServer(function(req,res){
    // 获取用户请求的路径req.url
    if(req.url === '/' || req.url === '/index.html'){
        // 读取index.html文件
        fs.readFile(path.join(__dirname,'html','/index.html'),function(err,data){
            if(err){
                throw err
            }
            res.end(data)
        })

    }else if(req.url === '/login'){
        fs.readFile(path.join(__dirname,'html','/login.html'),function(err,data){
            if(err){
                throw err
            }
            res.end(data)
        })
    }else{
        fs.readFile(path.join(__dirname,'html','/404.html'),function(err,data){
            if(err){
                throw err
            }
            res.end(data)
        })
    } 
    

}).listen(8080,function(){
    console.log('http://localhost:8080')
})