const http = require('http')
const url = require('url')
const querystring = require('querystring')
const fs = require('fs')

let user = {
    'hui': '123456'
}

http.createServer((req, res) => {
    let path = '', get = {}, post = {}

    if (req.method === 'GET') {
        let { pathname, query } = url.parse(req.url, true)

        path = pathname
        get = query
        complete()
    } else if (req.method === 'POST') {
        path = req.url

        let arr = []
        req.on('data', buffer => {
            arr.push(buffer)
        })
        req.on('end', () => {
            let buffer = Buffer.concat(arr)

            post = querystring.parse(buffer)
            complete()
        })
    }

    function complete() {
        if (path === '/reg') {
            let { username, password } = get

            if (user[username]) {
                res.write(JSON.stringify({ error: 1, msg: '此用户名已存在' }))
                res.end()
            } else {
                user[username] = password

                res.write(JSON.stringify({ error: 0, msg: '' }))
                res.end()
            }

        } else if (path === '/login') {
            let { username, password } = get

            if (!user[username]) {
                res.write(JSON.stringify({ error: 1, msg: '找不到此用户' }))
                res.end()
            } else if (user[username].password != password) {
                res.write(JSON.stringify({ error: 1, msg: '密码不正确' }))
                res.end()
            } else {
                res.write(JSON.stringify({ error: 0, msg: '' }))
                res.end()
            }
        } else {
            fs.readFile(`www${path}`, (err, buffer) => {
                if (err) {
                    res.writeHeader(404)
                    res.write('Not Found')
                    res.end()
                } else {
                    res.write(buffer)
                    res.end()
                }
            })
        }
    }

}).listen(8080)