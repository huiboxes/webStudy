const pug=require('pug')

pug.renderFile('./template/1.pug', {
    pretty: true,
    title: 'aaa',
    users: [
        { name: 'hui', password: '123456' },
        { name: 'zs', password: '123456' },
        { name: 'ls', password: '123456' },
    ]
}, (err, data) => {
    if (err) {
        console.log('渲染失败');
    } else {
        console.log(data);
        
    }
})