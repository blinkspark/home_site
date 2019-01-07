const express = require('express')
const router = express.Router()
const db = require('../db/db')
const { UserModel } = require('../db/Modals')
const bcrypt = require('bcrypt')
const butil = require('blink-util')

const ROUNDS = 11
const TOKEN_ROUNDS = 10

router.post('/login', async (req, res) => {
  try {
    await db.ConnectOnce(req.app.credential.mongoUrl)
    let user = await UserModel.findOne({ username: req.body.username })
    if (user) {
      let ok = await bcrypt.compare(req.body.password, user.password)
      if (ok) {
        user.expiresOn = butil.date.expireOn(butil.date.week(2))()
        user.accessToken = await bcrypt.hash(user.username, TOKEN_ROUNDS)
        await user.save()
        res.json({ user: { username: user.username, accessToken: user.accessToken } })
      } else {
        res.json({ error: 'Password not correct.' })
      }
    } else {
      res.json({ error: 'User not found.' })
    }
  } catch (error) {
    console.log(error)
    res.status(503).send(error)
  }
})

router.post('/verify', async (req, res) => {
  try {
    await db.ConnectOnce(req.app.credential.mongoUrl)
    let user = await UserModel.findOne({ accessToken: req.body.accessToken })
    res.json({ ok: user ? true : false })
  } catch (error) {
    console.log(error)
    res.status(503).send(error)
  }
})

// router.post('/register', async (req, res) => {
//   try {
//     await db.ConnectOnce(req.app.credential.mongoUrl)
//     let user = await UserModel.create({
//       username: req.body.username,
//       password: await bcrypt.hash(req.body.password, ROUNDS),
//       accessToken: await bcrypt.hash(req.body.username, ROUNDS),
//       expiresOn: butil.date.expireOn(butil.date.week(2))()
//     })
//     res.json({ username: user.username, accessToken: user.accessToken })
//   } catch (error) {
//     console.log(error)
//     res.status(503).send(error)
//   }
// })

module.exports = router