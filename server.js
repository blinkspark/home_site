const express = require('express')
const next = require('next')
const fs = require('fs')
const util = require('util')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = 3000

app.prepare()
  .then(() => {
    const server = express()

    // server.get('/p/:id', (req, res) => {
    //     const actualPage = '/post'
    //     const queryParams = { id: req.params.id }
    //     app.render(req, res, actualPage, queryParams)
    // })
    server.get('/api/posts', async (req, res, next) => {
      try {
        let readFile = util.promisify(fs.readFile)
        let stat = util.promisify(fs.stat)
        let index = JSON.parse((await readFile('./posts/index.json')).toString())
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
        }
        else {
          next()
        }
      } catch (error) {
        next()
      }
    })

    server.get('/api/posts/:name', async (req, res, next) => {
      try {
        let readFile = util.promisify(fs.readFile)
        let f = await readFile(`./posts/${req.params.name}`)
        res.send(f)
      } catch (error) {
        next()
      }
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })