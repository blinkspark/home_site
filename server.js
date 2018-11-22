const express = require("express")
const next = require("next")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const rootRouter = require('./src/root')
const blinkUtil = require('blink-util')
const db = require('./src/db/db')
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })

const port = 3000

app
  .prepare()
  .then(async () => {
    const server = express()
    let credential = await blinkUtil.fs.readJson('credential.json')
    // await db.ConnectOnce(credential.mongoUrl)

    app.cookieOptions = { maxAge: blinkUtil.date.week(2), httpOnly: true, signed: true, secure: dev ? false : true }

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(cookieParser(credential.secret))

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
