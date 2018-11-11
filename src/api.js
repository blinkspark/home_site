const express = require("express")
const fs = require("fs")
const util = require("util")
const db = require('./db/db')
const { ArticalModel } = require('./db/Modals')
const next = require("next")

const readFile = util.promisify(fs.readFile)

module.exports = {
  /**
   * 
   * @param {next.Server} app 
   * @returns {Promise} 
   */
  WithApp: async function (app) {
    let configJson = JSON.parse((await readFile('./credential.json')).toString())

    let Router = express.Router()

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
      try {
        await db.ConnectOnce(configJson.mongoUrl)
        let { title, content } = req.body
        let article = await ArticalModel.create({ title, content })
        app.render(req, res, `/post`, { id: article._id })
      } catch (error) {
        console.error(error)
        next()
      }
    })

    return Router
  }
}
