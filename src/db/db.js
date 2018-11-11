const mongoose = require('mongoose')

module.exports = {
  con: [],
  /**
   * @param {String} url 
   * @returns {mongoose.Connection}
   */
  ConnectOnce: async function (url) {
    if (this.con[url]) {
      return this.con[url]
    } else {
      mongoose.Connection
      await mongoose.connect(url, { useNewUrlParser: true })
      this.con[url] = mongoose.connection
      return this.con[url]
    }
  }
}