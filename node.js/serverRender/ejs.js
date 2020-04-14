const ejs=require('ejs')

ejs.renderFile('./template/1.ejs', {
    name: 'hui',
    arr: [123,54,64]
}, (err, data) => {
    if (err) {
        console.log('错了',err)
    } else { 
        console.log(data)
    }
})