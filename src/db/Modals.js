const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expire = (hours) => {
  return () => Date.now() + hours * 1000 * 60 * 60
}

let ArticleSchema = new Schema({
  title: String,
  author: String,
  createDate: { type: Date, default: Date.now },
  fixedTop: Boolean,
  content: String,
  tags: [String]
})
let ArticalModel = mongoose.model('Article', ArticleSchema)

let UserSchema = new Schema({
  username: String,
  password: String,
  accessToken: String,
  expiresOn: { type: Date, default: expire(24 * 2) }
})
let UserModel = mongoose.model('User', UserSchema)

module.exports = {
  ArticalModel, UserModel
}