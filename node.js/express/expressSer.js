const express=require('express')
const body=require('body-parser')

let server = express()
server.listen(8080)

server.use(body.urlencoded({
    extended: false
}))

server.post('/reg', (req, res) => {
    console.log(req.body);
})


server.get('/a', (req,res,next) => { 
    res.send('aaa')
})

// server.get('/a', () => { })

// 放在最后避免冲突
server.use(express.static('./static/'))