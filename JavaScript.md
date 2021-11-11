## 1.深拷贝和浅拷贝

- 浅拷贝：创建一个对象，这个对象有着原始对象的一份精确拷贝。如果属性是基本数据类型，拷贝的就是基本类型的值，如果是引用类型，拷贝的就是内存地址，所以如果其中一个对象改变了这个地址，就会影响到另一个对象

- 深拷贝：将一个对象从一个内存中完整地拷贝出来，从堆内存中开辟一个新的区域存放这个新对象，新对象的修改不会影响原对象

### 浅拷贝实现

- Object.assign()
- 展开运算符(...)
- Array.prototype.slice()

### 深拷贝实现

- JSON.parase(JSON.stringify(obj))
  - 会忽略undefined Symbol
  - 不能序列化函数
  - 不能解决循环引用的对象
  - 不能正确处理 new Date()
  - 不能处理正则

- 手写

  ```js
  function deepClone(obj) {
      let res;
      if(Object.prototype.toString.call(obj).slice(8,-1) === 'Object') {
          res = {}
      } else if(Array.isArray(obj)) {
          res = []
      } else {
          return obj
      }
  
      for(const key in obj) {
          res[key] = deepClone(obj[key])
      }
      return res;
  }
  ```
## 2.跨域
### 1.同源策略
跨越的本质其实就是指两个地址不同源，同源指的是：两个URL的协议，域名和端口号都相同，则就是两个同源的URL
```js
// 非同源
http://www.baidu.com
https://www.baidu.com

// 同源
http://www.baidu.com
http://www.baidu.com?query=1
```
同源策略是一个重要的安全策略，它用于限制一个origin的文档或者它加载的脚本如何能与另一个源的资源进行交互。其主要目的是为了保护用户信息的安全，防止恶意网站窃取数据，是浏览器在Web页面层面做的安全保护

### 2.同源策略的表现
同源策略主要的限制有三个层面：DOM层面，数据层面和网络层面

- DOM层面
  同源策略限制了来自不同源的JavaScript脚本对当前源的DOM对象进行读和写的操作
- 数据层面
  同源策略限制了不同源站点读取当前站点的Cookie，IndexDB，LocalStorage等数据
- 网络层面
  同源策略限制了通过XMLHttpRequest等方式将站点的数据发送给不同源的站点

### 3.跨域分类
同源策略虽然保证了浏览器的安全，但有时候我们需要访问不同源的数据等，因此有时我们需要进行跨越操作

#### 1.DOM层面

**片段标识符**

片段标识符的核心原理就是通过监听url中hash的改变来实现数据的传递

```html
// 父页面parentHtml.html
<!DOCTYPE html>
<html lang="zh">
    <head>
        <title></title>
    </head>
    <body>
        我是父页面
        <button id='btn'>父传给子</button>
        <iframe src="./childHtml.html" id="childHtmlId"></iframe>
    </body>
    <script>
        window.onhashchange = function() {
            console.log(decodeURIComponent(window.location.hash));
        };
        document.getElementById('btn').addEventListener('click', () => {
            const iframeDom = document.getElementById('childHtmlId');
            iframeDom.src += '#父传给子';
        });
    </script>
</html>
```

```html
// 子页面childHtml.html
<!DOCTYPE html>
<html lang="zh">
    <head>
        <title></title>
    </head>
    <body>
        我是子页面
        <button id='btn'>子传给父</button>
    </body>
    <script>
        window.onhashchange = function() {
            console.log(decodeURIComponent(window.location.hash));
        };

        document.getElementById('btn').addEventListener('click', () => {
            parent.location.href += '#子传给父';
        });
    </script>
</html>
```

**window.name**

> 浏览器窗口有window.name属性，这个属性最大的特点就是，无论是否同源，只要在同一个窗口里面，前一个网页设置的属性后一个网页就可以读取它。如果需要实现父页面和跨域的子页面之间的通信，需要一个和父页面同源的子页面作为中介，将跨域的子页面中的信息传递过来。

**document.domain**

> document.domain是存放文档的服务器主机名，可通过手动设置将其设置成当前域名或者上级域名，当具有同document.domain的页面就相当于处于同域名的服务器上，如果其域名和端口号相同，就可以实现跨越访问资源

**postMessage**

> postMessage是HTML5新增的跨文档通信API

- 通过监听message事件来接受数据
- 通过contentWindow.postMessage()函数来发生数据

```html
// 父页面
<!DOCTYPE html>
<html lang="zh">
    <head>
        <title></title>
    </head>
    <body>
        我是父页面
        <button id='btn'>父传给子</button>
        <iframe src="http://127.0.0.1:5500/024/childHtml.html" id="childHtmlId"></iframe>
    </body>
    <script>
        window.addEventListener('message', function(event) {
            console.log('父页面接收到信息', event.data);
        });
        document.getElementById('btn').addEventListener('click', () => {
            const iframeDom = document.getElementById('childHtmlId');
            iframeDom.contentWindow.postMessage('我是执鸢者1', 'http://127.0.0.1:5500/024/childHtml1.html');
        });
    </script>
</html>
```

```html
// 子页面
<!DOCTYPE html>
<html lang="zh">
    <head>
        <title></title>
    </head>
    <body>
        我是子页面
        <button id='btn'>子传给父</button>
    </body>
    <script>
        window.addEventListener('message', function(event) {
            console.log('子页面接收到信息', event.data);
        });

        document.getElementById('btn').addEventListener('click', () => {
            parent.postMessage('我是执鸢者2', 'http://127.0.0.1:5500/024/parentHtml1.html');
        });
    </script>
</html>
```

#### 2.网络层面

同源策略对网络层面的限制主要在于不允许通过XMLHttpRequest等方式访问非同源站点的资源，目前主要的解决方法有三种

**通过代理实现**

> 同源策略主要是浏览器为了安全而制定的策略，而服务端之间不存在这样的限制，因此可以先将请求发送到同源的服务器上，然后通过同源服务器代理至最终服务器，从而实现跨域访问资源，比如Node中间件代理，Nginx方向代理等

**JSONP**

> JSONP的原理其实就是利用script标签不会被同源策略限制的特点，通过监听一个回调函数，将这个回调函数的函数名作为参数发送给服务端，服务端直接运行这个函数并将数据通过形参的方式传回即可

**script标签特点：**src属性能够访问任何URL资源，不会受到同源策略的限制。如果访问的资源包含JavaScript代码，其会在下载后自动执行

**CORS**

跨域共享资源，主要的原理是服务端设置`Access-Control-Allow-Origin`等响应头，携带这个响应头的http请求，并不会被浏览器拦截

- 简单请求
  - 请求方式仅限于`GET POST HEAD`
  - `Content-Type`仅限于`text/plain mutipart/form-data application/x-www-form-urlencoded`

- 非简单请求
  - PUT DELETE方法
  - 发送json格式
  - 携带自定义请求头