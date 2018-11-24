const mongoose = require('mongoose')
const util = require('blink-util')

const Schema = mongoose.Schema

const expire = (hours) => {
  return () => Date.now() + hours * 1000 * 60 * 60
}

const ArticleSchema = new Schema({
  title: String,
  author: String,
  createDate: { type: Date, default: Date.now },
  fixedTop: Boolean,
  content: String,
  tags: [String]
})
const ArticalModel = mongoose.model('Article', ArticleSchema)

const UserSchema = new Schema({
  username: String,
  password: String,
  accessToken: String,
  expiresOn: { type: Date, default: () => util.date.expireOn(util.date.week(2)) }
})
const UserModel = mongoose.model('User', UserSchema)

module.exports = {
  ArticalModel, UserModel, TranslateModel
}