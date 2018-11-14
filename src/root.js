const express = require('express')
const next = require('next')
const util = require('blink-util')
const R = require('ramda')

const dev = process.env.NODE_ENV !== "production"

module.exports = {
  /**
  * @param {next.Server} app
  */
  WithApp: async function (app) {
    let Router = express.Router()
    const handle = app.getRequestHandler()

    Router.get('/editor', (req, res) => {
      if (R.isNil(req.session.user)) {
        res.redirect('/login')
      } else {
        handle(req, res)
      }
    })

    Router.get('*', (req, res) => {
      handle(req, res)
    })

    return Router
  }
}