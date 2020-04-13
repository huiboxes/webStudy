const Koa = require('koa')
const Router = require('koa-router')
const mysql = require('mysql')
const co = require('co-mysql')

let conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
})

let db = co(conn)

let server = new Koa()
server.listen(8080)

server.context.db = db

server.use(async ctx => {
    
})