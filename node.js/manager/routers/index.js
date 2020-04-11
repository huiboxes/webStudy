const { addRouter } = require('../lib/router')

addRouter('get', '/list', require('../routers/list'))
addRouter('post', '/add', require('../routers/add'))