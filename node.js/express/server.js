const express=require('express')
const cookieParse = require('cookie-parser')


let server = express()
server.listen(8080)

server.use(cookieParse(
    'fsdfdsfasdfsdagfdhhfnfbttbngh'
))

server.get('/a', (req, res) => {
    console.log('normal',req.cookies);
    console.log(req.signedCookies);
    
    res.cookie('amount', 99.8, {
        // httpOnly: true,
        // secure: true,  只认https
        //domain: 'aaa.com',
        //path: '/',
        maxAge: 14 * 86400 * 1000,
        signed: true
    })
    
    res.send('ok')
})