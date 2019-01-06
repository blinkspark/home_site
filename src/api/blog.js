const express = require('express')
const router = express.Router()
const db = require('../db/db')
const { UserModel } = require('../db/Modals')
const butil = require('blink-util')
const bcrypt = require('bcrypt')
const fs = require('fs')
const util = require('util')

let writeFile = util.promisify(fs.writeFile)

const c = {
  inst: null,
  getConfig: async () => {
    if (!this.inst) {
      this.inst = await butil.fs.readJson('credential.json')
    }
    return this.inst
  }
}

router.get('/posts', async (req, res) => {
  try {
    let config = await c.getConfig()
    await db.ConnectOnce(config.mongoUrl)
    let user = await UserModel.create({
      username: 'test',
      password: await bcrypt.hash('123456', 11),
      accessToken: await bcrypt.hash('test', 10),
      expiresOn: butil.date.expireOn(butil.date.week(2))()
    })
    console.log(req.app.set)
    res.send(user)
  } catch (error) {
    console.log(error)
    res.status(503).send(error)
  }
})

module.exports = router