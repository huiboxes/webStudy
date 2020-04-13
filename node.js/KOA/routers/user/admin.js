const Router = require('koa-router')

let admin = new Router()
admin.get('/a', async ctx => {
    ctx.body = '管理员的a'
})

module.exports=admin.routes()