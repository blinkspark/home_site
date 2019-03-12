const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  accessToken: { type: String, required: true },
})

const ArticleSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cdate: { type: Date, default: Date.now },
  mdate: { type: Date, default: Date.now },
  title: { type: String, required: true },
  text: { type: String }
})

module.exports = {
  UserModel: mongoose.model('User', UserSchema),
  ArticleModel: mongoose.model('Article', ArticleSchema),
}
