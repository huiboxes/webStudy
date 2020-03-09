var fs = require('fs')
var path = require('path')

var fileName = path.join(__dirname,'test')

fs.mkdir(fileName,function(err){
    if(err){
        console.log('创建失败')
    }else{ 
        fs.mkdir('test/01',function(){

        })
    }
})

// nodejs错误优先 error-first

