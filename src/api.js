const express = require("express")
const fs = require("fs")
const util = require("util")
const db = require('./db/db')
const { ArticalModel } = require('./db/Modals')
const next = require("next")
const R = require('ramda')

const readFile = util.promisify(fs.readFile)

module.exports = {
  /**
   * 
   * @param {next.Server} app 
   * @returns {Promise<Router>} 
   */
  WithApp: async function (app) {
    const UsersRouter = await require('./users').WithApp(app)

    let configJson = JSON.parse((await readFile('./credential.json')).toString())

    let Router = express.Router()

    Router.use('/users', UsersRouter)

    Router.get("/posts", async (req, res, next) => {
      try {
        await db.ConnectOnce(configJson.mongoUrl)
        let articles = await ArticalModel.find({}).sort({ createDate: -1 })
        res.send(articles)
      } catch (error) {
        console.error(error)
        next()
      }
    })

    Router.get("/posts/:id", async (req, res, next) => {
      try {
        await db.ConnectOnce(configJson.mongoUrl)
        let article = await ArticalModel.findOne({ _id: req.params.id })
        res.send(article)
      } catch (error) {
        console.error(error)
        next()
      }
    })

    Router.post("/posts", async (req, res) => {
      if (R.isNil(req.session.user)) {
        res.redirect('/login')
      } else {
        try {
          await db.ConnectOnce(configJson.mongoUrl)
          let { title, content, author } = req.body
          let article = await ArticalModel.create({ title, content })
          res.redirect('/')
        } catch (error) {
          console.error(error)
          next()
        }
      }
    })

    Router.post("/posts/:id", async (req, res) => {
      if (R.isNil(req.session.user)) {
        res.redirect('/login')
      } else {
        try {
          await db.ConnectOnce(configJson.mongoUrl)
          console.log(req.body)
          let { title, content, author } = req.body
          let article = await ArticalModel.findOne({ _id: req.params.id })
          if (!R.isNil(article)) {
            article.title = title
            article.content = content
            article.author = author
            await article.save()
            res.redirect('/')
          }
          else {
            res.send('article not found!')
          }
        } catch (error) {
          console.error(error)
          next()
        }
      }
    })

    Router.delete("/posts/:id", async (req, res) => {
      if (R.isNil(req.session.user)) {
        res.redirect('/login')
      } else {
        try {
          await db.ConnectOnce(configJson.mongoUrl)
          await ArticalModel.findOneAndDelete({ _id: req.params.id })
          res.end()
        } catch (error) {
          console.error(error)
          next()
        }
      }
    })

    return Router
  }
}
