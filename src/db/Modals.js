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

module.exports = {
  ArticalModel
}