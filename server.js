const express = require("express")
const next = require("next")
const apiRouter = require("./src/api")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const rootRouter = require('./src/root')
const session = require('express-session')
const blinkUtil = require('blink-util')
const db = require('./src/db/db')
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const MongoStore = require('connect-mongo')(session)

const port = 3000

app
  .prepare()
  .then(async () => {
    const server = express()
    let credential = await blinkUtil.fs.readJson('credential.json')
    await db.ConnectOnce(credential.mongoUrl)

    app.cookieOptions = { maxAge: blinkUtil.date.week(1), httpOnly: true, signed: true, secure: dev ? false : true }

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(cookieParser(credential.secret))
    server.use(session(
      {
        resave: true,
        saveUninitialized: true,
        secret: credential.secret,
        cookie: {
          maxAge: blinkUtil.date.day(14)
        },
        store: new MongoStore({
          mongooseConnection: db.con[credential.mongoUrl]
        })
      }
    ))
    server.use('/api',(req,res,next)=>{
      res.header('Access-Control-Allow-Origin', 'http://nealwang.top')
      res.header('Access-Control-Allow-Credentials', 'true')
      next()
    })


    server.use("/api", await apiRouter.WithApp(app))

    server.use('/', await rootRouter.WithApp(app))

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
