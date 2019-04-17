const Router = require('express').Router()
const { UserModel, ArticleModel } = require('./db/Models')
const bcrypt = require('bcrypt')
const fs = require('fs')
const util = require('util')

const ROUND = 11

Router.post('/login', async (req, res) => {
  try {
    const accessToken = Buffer.from(await bcrypt.hash(req.body.email, 10)).toString('hex')
    const userFound = await UserModel.findOne({
      email: req.body.email
    })
    if (userFound) {
      if (await bcrypt.compare(req.body.password, userFound.password)) {
        userFound.accessToken = accessToken
        await userFound.save()
        const user = {
          email: userFound.email,
          accessToken: userFound.accessToken
        }
        req.session.user = user
        res.json({ user })
      } else {
        res.json({ error: 'Wrong password!' })
      }
    } else {
      res.json({ error: 'User not found!' })
    }
  } catch (error) {
    console.error(error)
    res.json({ error })
  }
})

Router.post('/register', async (req, res) => {
  try {
    const accessToken = Buffer.from(await bcrypt.hash(req.body.email, 10)).toString('hex')
    const newUser = await UserModel.create({
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, ROUND),
      accessToken
    })
    res.json({
      user: {
        email: newUser.email,
        accessToken: newUser.accessToken
      }
    })
  } catch (error) {
    console.error(error)
    res.json({ error })
  }
})

Router.get('/logout', async (req, res) => {
  req.session.user = {}
  res.status(200).send('ok')
})

Router.post('/posts', async (req, res) => {
  try {
    const accessToken = req.session.user.accessToken
    const user = await UserModel.findOne({ accessToken })
    if (!user) throw 'User not fount!'
    const article = await ArticleModel.create({
      author: user._id,
      title: req.body.title,
      text: req.body.text
    })
    if (!article) throw 'Create Article Error!'
    res.json({ ok: true })
  } catch (error) {
    console.error(error)
    res.json({ error: error.toString() })
  }
})

Router.get('/posts', async (req, res) => {
  try {
    const articles = await ArticleModel.find().sort({ cdate: -1 })
    res.json({ articles })
  } catch (error) {
    console.error(error)
    res.json({ error: error.toString() })
  }
})

Router.get('/posts/:id', async (req, res) => {
  try {
    const id = req.params.id
    const article = await ArticleModel.findOne({ _id: id })
    res.json({ article })
  } catch (error) {
    console.error(error)
    res.json({ error: error.toString() })
  }
})


Router.delete('/posts/:id', async (req, res) => {
  const id = req.params.id
  try {
    if (!req.session.user.accessToken) throw 'Wrong user info!'
    if (!id) throw 'Need a ID!'

    const result = await ArticleModel.deleteOne({ _id: id })
    res.json({ ok: result.ok })
  } catch (error) {
    console.error(error)
    res.json({ error: error.toString() })
  }
})

Router.put('/posts/:id', async (req, res) => {
  const id = req.params.id
  try {
    if (!req.session.user.accessToken) throw 'Wrong user info!'
    if (!id) throw 'Need a ID!'
    const result = await ArticleModel.findOne({ _id: id })
    if (!result) throw 'Cannot find target article!'

    result.title = req.body.title
    result.text = req.body.text
    result.mdate = Date.now()
    await result.save()

    res.json({ ok: true })
  } catch (error) {
    console.error(error)
    res.json({ error: error.toString() })
  }
})

Router.post('/upload', async (req, res) => {
  if (!req.session.user.accessToken) {
    res.json({ error: 'Access denied!' })
    return
  }
  const files = req.files
  const keys = Object.keys(files)
  for (const k of keys) {
    const f = files[k]
    f.mv(`./static/upload/${f.name}`)
  }
  res.json({ ok: true })
})

const readDir = util.promisify(fs.readdir)
const unlink = util.promisify(fs.unlink)
Router.get('/upload', async (req, res) => {
  let files = await readDir('static/upload')
  files = files.map((v, i) => {
    return { name: v, href: `/upload/${v}` }
  })
  files = files.filter(v => {
    return v.name !== 'README.md'
  })
  res.json({ list: files })
})

Router.delete('/upload/:name', async (req, res) => {
  console.log(req.body)
  try {
    if (req.session.user.accessToken) {
      const name = req.params.name
      await unlink(`static/upload/${name}`)
      res.json({ ok: true })
    } else {
      res.json({ error: 'Access denied!' })
    }
  } catch (error) {
    res.json({ error })
  }
})

Router.post('/changepassword', async (req, res) => {
  const email = req.session.user.email
  try {
    const user = await UserModel.findOne({ email })
    if (!user) {
      res.json({ error: 'User not found.' })
    }
    if (await bcrypt.compare(req.body.op, user.password)) {
      user.password = await bcrypt.hash(req.body.np, ROUND)
      await user.save()
      res.json({ ok: true })
    } else {
      res.json({ error: 'Old password not match' })
    }
  } catch (error) {
    res.json({ error: error.toString() })
  }
})
module.exports = Router