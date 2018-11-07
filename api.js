const express = require("express")
const fs = require("fs")
const util = require("util")

let Router = express.Router()

Router.get("/posts", async (req, res, next) => {
  try {
    let readFile = util.promisify(fs.readFile)
    let stat = util.promisify(fs.stat)
    let index = JSON.parse((await readFile("./posts/index.json")).toString())
    let fileInfos = []
    for (const p of index.posts) {
      p.fi = await stat(`./posts/${p.fname}`)
      fileInfos.push(p)
    }
    let name = req.query.name
    if (name) {
      fileInfos = fileInfos.filter(fi => {
        return name === fi.fname ? true : false
      })
    }
    if (fileInfos.length > 0) {
      res.send(fileInfos)
    } else {
      next()
    }
  } catch (error) {
    next()
  }
})

Router.get("/posts/:name", async (req, res, next) => {
  try {
    let readFile = util.promisify(fs.readFile)
    let f = await readFile(`./posts/${req.params.name}`)
    res.send(f)
  } catch (error) {
    next()
  }
})

module.exports = Router
