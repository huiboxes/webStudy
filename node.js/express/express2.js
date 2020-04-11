const express = require('express')
const body = require('./libs/body-parser')
const multer = require('multer')

let server = express()
server.listen(8080)

// server.use(body.urlencoded())



let obj = multer({ dest: './static/upload' })
server.use(obj.any())

server.post('/reg',(req,res)=> {
    console.log(req.files);
    
})


server.use(express.static('./static/'))