const production = process.env.NODE_ENV === 'production'
const HOST = production ? 'https://nealwang/top' : 'http://localhost:3000'
module.exports = {
  HOST
}