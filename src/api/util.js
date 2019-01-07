const db = require('../db/db')
const { UserModel } = require('../db/Modals')

module.exports = {
  verifyAccessToken: async (mongoUrl, token) => {
    await db.ConnectOnce(mongoUrl)
    let user = await UserModel.findOne({ accessToken: token })
    return user ? true : false
  }
}