const express = require('express')
const next = require('next')
const util = require('blink-util')
const R = require('ramda')
const db = require('./db/db')
const { ArticalModel } = require('./db/Modals')
const dev = process.env.NODE_ENV !== "production"

module.exports = {
  /**
  * @param {next.Server} app
  */
  WithApp: async function (app) {
    let Router = express.Router()
    const handle = app.getRequestHandler()

    let cred = await util.fs.readJson('credential.json')

    Router.get('/editor', (req, res) => {
      if (R.isNil(req.session.user)) {
        res.redirect('/login')
      } else {
        handle(req, res)
      }
    })

    Router.get('/', async (req, res, next) => {
      try {
        await db.ConnectOnce(cred.mongoUrl)
        let q = R.ifElse(R.isNil, R.always({ tags: 'Public' }), R.always({}))(R.path(['session', 'user'], req))
        req.articles = await ArticalModel.find(q).sort({ createDate: -1 })
        next()
      } catch (error) {
        console.error(error)
        next()
      }
    })

    Router.get('*', (req, res) => {
      handle(req, res)
    })

    return Router
  }
}