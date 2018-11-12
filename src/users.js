const express = require("express")
let passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('./db/db')
const { UserModel } = require('./db/Modals')
const fs = require("fs")
const util = require("util")
const bcrypt = require('bcrypt')
const next = require('next')

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

    let config = JSON.parse((await readFile('credential.json')).toString())

    passport.use(new LocalStrategy(
      async (username, password, done) => {
        await db.ConnectOnce(config.mongoUrl)
        let user = await UserModel.findOne({ username })

        if (!user) {
          return done(null, false, { message: 'Incorrect username.' })
        } else {
          let ok = await bcrypt.compare(password, user.password)

          if (!ok) {
            return done(null, false, { message: 'Incorrect password.' })
          }
          return done(null, user)
        }
      })
    )

    passport.serializeUser((user, done) => {
      done(null, user.username);
    })

    //ASYNC ALL THE THINGS!!
    passport.deserializeUser(async (username, done) => {
      try {
        await db.ConnectOnce(config.mongoUrl)
        let user = await UserModel.findOne({ username });
        if (!user) {
          return done(new Error('user not found'));
        }
        done(null, user)
      } catch (e) {
        done(e)
      }
    })

    Router.post('/login', (req, res, next) => {
      passport.authenticate('local', (err, user, info) => {
        console.log(err, user, info)
        if (err) { return next(err) }
        if (!user) { return res.redirect('/_error') }
        // req.logIn(user, function (err) {
        //   if (err) { return next(err) }
        //   return res.redirect('/users/' + user.username)
        // })
        res.redirect('/')
      })(req, res, next)
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
  localPassport: passport
}