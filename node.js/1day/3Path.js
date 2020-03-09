var fs = require('fs')
// 加载path模块
var path = require('path')
var fileName = path.join(__dirname,'hello.txt')
console.log(fileName)

// var fileName = __dirname + '\\' + 'hello.txt'

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
})
