const express = require('express')
const router = express.Router()
const db = require('../db/db')
const { UserModel, ArticalModel } = require('../db/Modals')
const butil = require('blink-util')
const bcrypt = require('bcrypt')
const fs = require('fs')
const util = require('util')
const { verifyAccessToken } = require('./util')

router.get('/posts', async (req, res) => {
  try {
    let config = req.app.credential
    await db.ConnectOnce(config.mongoUrl)
    let articles = await ArticalModel.find({})
    res.json(articles)
  } catch (error) {
    console.log(error)
    res.status(503).send(error)
  }
})

router.get('/posts/:id', async (req, res) => {
  try {
    let config = req.app.credential
    await db.ConnectOnce(config.mongoUrl)
    let article = await ArticalModel.findOne({ _id: req.params.id })
    res.json(article)
  } catch (error) {
    console.log(error)
    res.status(503).send(error)
  }
})

router.put('/posts/:id', async (req, res) => {
  try {
    let config = req.app.credential
    await db.ConnectOnce(config.mongoUrl)
    if (await verifyAccessToken(config.mongoUrl, req.body.accessToken)) {
      let article = await ArticalModel.findOne({ _id: req.params.id })
      article.title = req.body.title
      article.content = req.body.content
      await article.save()
      res.json({ ok: true })
    } else {
      res.json({ ok: false })
    }
  } catch (error) {
    console.log(error)
    res.status(503).send(error)
  }
})

router.delete('/posts/:id', async (req, res) => {
  try {
    let config = req.app.credential
    await db.ConnectOnce(config.mongoUrl)
    if (await verifyAccessToken(config.mongoUrl, req.query.accessToken)) {
      await ArticalModel.deleteOne({ _id: req.params.id })
      res.json({ ok: true })
    } else {
      res.json({ ok: false })
    }
  } catch (error) {
    console.log(error)
    res.status(503).send(error)
  }
})

router.post('/posts', async (req, res) => {
  try {
    let config = req.app.credential
    await db.ConnectOnce(config.mongoUrl)
    if (await verifyAccessToken(config.mongoUrl, req.body.accessToken)) {
      let article = await ArticalModel.create({
        title: req.body.title,
        content: req.body.content
      })
      res.json({ ok: true })
    } else {
      res.json({ ok: false })
    }
  } catch (error) {
    console.log(error)
    res.status(503).send(error)
  }
})

module.exports = router