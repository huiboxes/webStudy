const http = require('http')
const util = require('./util')
const fs = require('fs')

http.createServer((req, res) => {
    let boundary = '--' + req.headers['content-type'].split('; ')[1].split('=')[1]

    let arr = []
    req.on('data', buffer => {
        arr.push(buffer)
    })
    req.on('end', () => {
        let buffer = Buffer.concat(arr)

        let res = util.bufferSplit(buffer, boundary)

        res.pop()
        res.shift()


        res.forEach(buffer => {
            buffer = buffer.slice(2, buffer.length - 2)

            let n = buffer.indexOf('\r\n\r\n')

            let info = buffer.slice(0, n)
            let data = buffer.slit(n + 4)

            if (info.indexOf('\r\n') != -1) {

                let res2 = info.split('\r\n')[0].split('; ')
                let name = res2[1].split('=')[1]
                let filename = res2[2].split('=')[1]

                name = name.substring(1, name.length - 1)
                filename = filename.substring(1, filename.length - 1)

                fs.writeFile(`upload/${filename}`, data, err => {
                    if (err) {
                        throw err
                    } else {
                        console.log('上传成功')
                    }
                })
            } else {
                // 普通信息
                let name = info.split('; ')[1].split('=')[1]
                name = name.substring(1, name.length - 1)
            }
        })
    })

}).listen(8080)