const express = require("express")
const next = require("next")
const ApiRouter = require("./src/api")
const BodyParser = require('body-parser')
const session = require('express-session')
const passport = require('./src/users').localPassport

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

    server.use(session({
      resave: false,//添加这行
      saveUninitialized: true,//添加这行 
      secret: 'pHEFupykX3v7GBmC2MA7cEpjPTqnRFu'
    }))
    server.use(BodyParser.json())
    server.use(BodyParser.urlencoded({ extended: true }))
    server.use(passport.initialize())
    server.use(passport.session())
    //Could be async if we wanted it to


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
