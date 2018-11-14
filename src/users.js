const express = require("express")
const LocalStrategy = require('passport-local').Strategy
const db = require('./db/db')
const { UserModel } = require('./db/Modals')
const fs = require("fs")
const util = require("util")
const bcrypt = require('bcrypt')
const next = require('next')
const uuidv4 = require('uuid/v4')
const blinkUtil = require('blink-util')

const saltRound = 10

const readFile = util.promisify(fs.readFile)


module.exports = {
  /**
   * 
   * @param {next.Server} app 
   * @returns {Promise<Router>} 
   */
  WithApp: async function (app) {
    let Router = express.Router()

    let credential = await blinkUtil.fs.readJson('credential.json')

    Router.post('/login', async (req, res, next) => {
      let { username, password } = req.body
      if (!username || !password) {
        res.redirect('/login')
        return
      }
      await db.ConnectOnce(credential.mongoUrl)
      let user = await UserModel.findOne({ username })
      if (!user) { res.redirect('/login'); return }

      let ok = await bcrypt.compare(password, user.password)
      if (!ok) {
        res.redirect('/login'); return
      }
      else {
        user.accessToken = uuidv4()
        user.expiresOn = Date.now() + blinkUtil.date.week(1)
        await user.save()
        // res.cookie('user', {
        //   username, accessToken: user.accessToken
        // }, app.cookieOptions)
        res.req.session.user = { username: username, accessToken: user.accessToken }
        res.redirect('/')
      }
    })

    // Router.post('/register', async (req, res) => {
    //   if (!req.body.password || !req.body.username) {
    //     app.render(req, res, '/_error', {}); return
    //   }
    //   try {
    //     await db.ConnectOnce(config.mongoUrl)

    //     let user = await UserModal.findOne({ username: req.body.username })
    //     if (user) { console.log(user); app.render(req, res, '/_error', {}); return }

    //     let hash = await bcrypt.hash(req.body.password, saltRound)
    //     user = await UserModal.create({ username: req.body.username, password: hash })
    //     res.send(user)
    //   } catch (error) {
    //     console.error(error)
    //     app.render(req, res, '/_error', {})
    //   }

    //   // UserModal.createOne({ username: req.username })
    // })

    return Router
  },
}