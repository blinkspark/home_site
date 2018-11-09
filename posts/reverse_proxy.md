# express 设置反代

作者：Neal Wang _2018年11月 8日 19:55:59_

首先要安装代理的中间件http-proxy-middleware

```
$ npm i http-proxy-middleware
```

安装好后在服务器的js文件中加入
```
const proxy = require('http-proxy-middleware')

let wsProxy = proxy('/bnws', {
  target: 'http://localhost:2233',  // 你要反代的地址
  changeOrigin: true,               // 是否修改请求源
  logLevel: 'debug',                // 日志级别，不要的话不要加这行 
  ws: true                          // 启用websocket，如果你要代理websocket的话加上这行
})
const server = express()

server.use('/bnws', wsProxy)

server.on('upgrade', wsProxy.upgrade)//监听upgrade事件，这样会转发upgrade事件给下一级

server.listen(port, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
```

这样反代就设置成功了。