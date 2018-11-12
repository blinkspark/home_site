const mongoose = require('mongoose')

const Schema = mongoose.Schema

let ArticleSchema = new Schema({
  title: String,
  author: String,
  createDate: { type: Date, default: Date.now },
  fixedTop: Boolean,
  content: String
})
let ArticalModel = mongoose.model('Article', ArticleSchema)

let UserSchema = new Schema({
  username: String,
  password: String
})
let UserModel = mongoose.model('User', UserSchema)

module.exports = {
  ArticalModel, UserModel
}