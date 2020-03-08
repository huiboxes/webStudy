// process模块在使用的时候无需通过Require()函数来加载该模块，可以直接使用
// fs模块必须通过require()函数来加载该模块
// process是全局，而fs不是全局模块 
// api稳定性分三级   0是被启用   1是在正在测速开发中     2是稳定的

// --------------------------文件写入操作------------
// 加载文件操作模块，fs模块
// var fs = require('fs')
// // 实现文件写入操作

// var msg = 'Hello World!'


// // 调用fs.writeFile()进行文件写入
// fs.writeFile('./hello.txt',msg,'utf8',function(err){
//     if(err){
//         console.log('写入文件失败：' + err)
//     }else{
//         console.log('ok')
//     }

// })


// 如果err === null表示写入文件成功，没有错误
// 只要err 里面不是null ，就表示写入文件失败

// --------------------------文件读取操作-----------------------
// 加载fs模块
var fs = require('fs')
// 调用fs.readFile()方法读取文件
// 在读取文件的时候，如果传递了编码，那么回调函数中的data默认就会转换位字符串
// ./执行的是相对当前执行node命令的路径，而不是相对于正在执行的这个JS文件来查找

var fileName = __dirname + '\\' + 'hello.txt'

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        throw err
    }
    // data参数的数据类型是一个Buffer对象，里面保存的就是一个一个的字节（理解为字节数组）
    // 把Buffer对象转换为一字符串，调用toString（）方法

    // 调用Buffer对象的toString方法的时候，不传utf8参数，默认也是utf8
    console.log(data)
})

// 解决在文件读取中./的问题
// __dirname当前正在执行的JS所在的目录
// __filename当前正在执行的JS文件的完整路径
// 实际上它们两个不是全局的  它们是本地的


// -------------------------------异步操作---------------------------
// console.log('111')
// setTimeout(()=>{
//     console.log('222')
// },10)
// console.log('333')
// setTimeout(()=>{
//     console.log('444')
// },0)
// console.log('555')