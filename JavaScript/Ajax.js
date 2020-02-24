function(options) {
    options = options || {}
    options.type = options.type || 'get'
    options.data = options.data || {}
    options.dataType = options.dataType || 'text'
    options.success = options.success || {}
    options.error = options.error || {}
    // 不兼容IE6
    if (window.XMLHttpRequest) {
        let xhr = new XMLHttpRequest();
        //数据组装
        let arr = []
        for(let name in options.data){
            arr.push(`$(name) = $(options.data[name])`)
        }
        let strData = arr.join('&')
        if(type === 'post'){
            xhr.open(options.type,options.url,true)
            xhr.setRequestHeader(options.dataType)
            xhr.send(strData)
        }else{
            xhr.open('GET',options.url + '?' + strData,true)
            xhr.send()
        }
        // 连接   open第三个参数 true为同步，false为异步
        // 异步——并行     多个操作同时进行
        // 同步——串行     一多个操作一个一个进行
        // 接收
        // onreadystatechange当通信状态发生变化   readyState目前通信处于什么状态
        // 0初始化    刚刚创建
        // 1已连接
        // 2已发送
        // 3已接受    请求头
        // 4已接受    请求体    完成请求，无论请求成功与否
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                // 成功——2xx、304
                if (
                    (xhr.status >= 200 && xhr.status < 300) ||
                    xhr.status === 304
                ) {
                    let data = xhr.responseText

                    switch(options.dataType){
                        case 'json'
                            if(window.JSON && JSON.parse){
                                data = JSON.parse(data)
                            }else{
                                data = eval('(' + str + ')')
                            }
                            break
                        case 'xml'
                            data = xhr.responseXML
                            break
                    }

                    options.success && options.success(xhr.responseText)
                } else {
                    options.error && options.error()
                }
            }
        };
    } else {
        var xhr = ActiveXObject("Microsoft.XMLHttp");
    }
};
