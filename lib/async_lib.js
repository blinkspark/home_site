const fs = require('fs')

const lib = {
  readdirAsync: (path) => {
    let p = new Promise((res, rej) => {
      fs.readdir(path, (err, files) => {
        if (err != null) {
          rej(err)
        } else {
          res(files)
        }
      })
    })
    return p
  }
}

module.exports = lib