const mongoose = require('mongoose')
const util = require('blink-util')

const Schema = mongoose.Schema

const expire = (hours) => {
  return () => Date.now() + hours * 1000 * 60 * 60
}

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  createDate: { type: Date, default: Date.now },
  fixedTop: Boolean,
  content: { type: String, required: true },
  tags: [String]
})
const ArticalModel = mongoose.model('Article', ArticleSchema)

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  accessToken: String,
  expiresOn: { type: Date }
})
const UserModel = mongoose.model('User', UserSchema)

module.exports = {
  ArticalModel, UserModel
}