const Koa = require('koa')
const Router = require('koa-router')


let server = new Koa()
server.listen(8080)


server.kes = [
    'fsafsdfasdfasdsfasd',
    'safsdfsdfasdfsadf',
    'fsafsdfsadfdsfasecfacsd'
]

server.use(async ctx => {
    // ctx.cookies.set('user', 'abc', {
    //     maxAge: 14 * 86400 * 100,
    //     signed: false
    // })
    ctx.cookies.get('user',{signed: true})
})