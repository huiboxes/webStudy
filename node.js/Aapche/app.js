var http = require('http')
var path = require('path')
var fs = require('fs')
var mime = require('mime')

http.createServer(function (req, res) {
    // 1获取用户请求的路径


    // 获取public目录的完整路径
    var publicDir = path.join(__dirname, 'public')

    // 根据public的路径和用户请求的路径,最终计算出用户请求的静态资源的完整路径
    var fileName = path.join(publicDir, req.url)

    // 根据文件的完整路径去读取该文件,读取到了就把文件返回给用户,读取不到就404
    fs.readFile(fileName,function(err,data){
        if(err){
            res.end('文件不存在')
        }else{
            // 通过mime判断文件类型
            res.setHeader('Content-Type',mime.getType(fileName))
            res.end(data)
        }
    })
    
   

}).listen(8080, function () {
    console.log('http://localhost:8080')
})