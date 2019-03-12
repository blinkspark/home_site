const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const mongoose = require('mongoose')
const credential = require('./credential.json')
const session = require('express-session')
const fileStore = require('session-file-store')(session)
const svgCaptcha = require('svg-captcha')
const apiRouter = require('./api')
const bodyParser = require('body-parser')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  mongoose.connect(credential.mongoUrl, { useNewUrlParser: true })

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // body parser
  // for parsing application/json
  app.use(bodyParser.json());
  // for parsing application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  // session
  const week = 1000 * 60 * 60 * 24 * 7
  app.use(session({
    secret: credential.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: 'auto',
      maxAge: week,
      httpOnly: true
    },
    store: new fileStore()
  }))
  // captcha
  app.get('/captcha', (req, res) => {
    const captcha = svgCaptcha.createMathExpr({ color: true, noise: 2 })
    req.session.captcha = captcha.text

    res.type('svg')
    res.status(200).send(captcha.data)
  })
  // route
  app.use('/api', apiRouter)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)

  consola.ready({
    message: `Server listening on http://${host === '0.0.0.0' ? 'localhost' : host}:${port}`,
    badge: true
  })
}
start()
