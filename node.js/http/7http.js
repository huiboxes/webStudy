var http = require('http')
var fs = require('fs')
var path = require('path')

http.createServer(function (req, res) {

    if (req.url === '/' || req.url === 'index.html') {
        fs.readFile(path.join(__dirname, 'html', 'index.html'), function (err, data) {
            if (err) {
                throw err
            }
            res.end(data)
        })
    } else if (req.url === '/login') {
        fs.readFile(path.join(__dirname, 'html', '/login.html'), function (err, data) {
            if (err) {
                throw err
            }
            res.end(data)
        })
    } else if(req.url === '/0.jpg'){
        // 表示用户要请求图片
        fs.readFile(path.join(__dirname, 'html', '/0.jpg'), function (err, data) {
            if (err) {
                throw err
            }
            res.setHeader('Content-Type','image/jpg')
            res.end(data)
        })
    }else if(req.url === '/css/index.css'){
        // 表示用户要请求CSS
        fs.readFile(path.join(__dirname, 'css', '/index.css'), function (err, data) {
            if (err) {
                throw err
            }
            res.end(data)
        })
    }else{
        fs.readFile(path.join(__dirname, 'html', '/404.html'), function (err, data) {
            if (err) {
                throw err
            }
            res.end(data)
        })
    }

}).listen(8080, function () {
    console.log('http://localhost:8080')
})