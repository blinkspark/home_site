const express = require("express")
const next = require("next")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const blinkUtil = require('blink-util')
// const db = require('./src/db/db')
const R = require('ramda')
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const blogRouter = require('./src/api/blog')
const userRouter = require('./src/api/user')

const port = 3000

app
  .prepare()
  .then(async () => {
    const server = express()
    app.credential = await blinkUtil.fs.readJson('credential.json')
    server.credential = app.credential
    app.translate = await blinkUtil.fs.readJson('translate.json')
    const handle = app.getRequestHandler()

    app.cookieOptions = { maxAge: blinkUtil.date.week(2), httpOnly: true, signed: true, secure: dev ? false : true }

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(cookieParser(app.credential.secret))

    server.use('/api/blog', blogRouter)
    server.use('/api/user', userRouter)

    server.get('*', (req, res) => {
      handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
