const Router = require('koa-router')

let company = new Router()
company.get('/a', async ctx => {
    ctx.body = '企业的a'
})

module.exports=company.routes()