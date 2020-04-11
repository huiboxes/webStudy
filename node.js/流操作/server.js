const http=require('http')
const zlib = require('zlib')
const url = require('url')
const fs=require('fs')

http.createServer((req, res) => {
    let { pathname } = url.parse(req.url, true)
    let filepath = 'www' + pathname

    fs.stat(filepath, (err,stat)=> {
        if (err) {
            // res.setHeader('content-encoding', 'deflate')
            res.writeHeader(404)
            res.write('Not found')
            res.end()
        } else {
            let rs = fs.createReadStream(filepath)
            rs.on('error', err => {})
            res.setHeader('content-encoding', 'gzip')
            let gz = zlib.createGzip()
            rs.pipe(gz).pipe(res)
        }
    })





}).listen(8080)