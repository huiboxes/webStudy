window.jQuery = function (nodeOrSelector) {
  //   判断个的是选择器还是节点
  let nodes = {};
  if (typeof nodeOrSelector === "string") {
    let temp = document.querySelectorAll(nodeOrSelector);
    for (let i = 0; i < temp.length; i++) {
      nodes[i] = temp[i];
    }
    nodes.length = temp.length;
  } else if (nodeOrSelector instanceof Node) {
    nodes = {
      0: nodeOrSelector,
      length: 1
    };
  }
  nodes.addClass = function (classes) {
    classes.forEach(value => {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.add(value);
      }
    });
  };
  nodes.text = function (text) {
    if (text === undefined) {
      var texts = [];
      for (let i = 0; i < nodes.length; i++) {
        texts.push(nodes[i].textContent);
      }
      return texts;
    } else {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].textContent = text;
      }
    }
  };
  nodes.ajax = function ({ url, method, body, Headers }) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      request.open(method, url);
      for (let key in Headers) {
        let value = Headers[key];
        request.setRequestHeader(key, value);
      }
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status >= 200 && request.status < 300) {
            resolve(request.responseText);
          } else if (request.status >= 400) {
            reject(request);
          }
        }
      };
    });
    request.send(body);
  };
  return nodes;
};