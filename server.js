const express = require("express")
const next = require("next")
const fs = require("fs")
const util = require("util")
const ApiRouter = require("./src/api")
const BodyParser = require('body-parser')
// const proxy = require('http-proxy-middleware')

// let wsProxy = proxy('/bnws', {
//   target: 'http://localhost:2233',
//   changeOrigin: true,
//   // logLevel: 'debug',
//   ws: true
// })

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

const port = 3000

app
  .prepare()
  .then(async () => {
    const server = express()

    server.use(BodyParser.json())
    server.use(BodyParser.urlencoded({ extended: true }));

    // server.get('/p/:id', (req, res) => {
    //     const actualPage = '/post'
    //     const queryParams = { id: req.params.id }
    //     app.render(req, res, actualPage, queryParams)
    // })
    server.use("/api", await ApiRouter.WithApp(app))
    // server.use('/bnws', wsProxy)

    server.get("*", (req, res) => {
      return handle(req, res)
    })
    // server.on('upgrade', wsProxy.upgrade)

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
