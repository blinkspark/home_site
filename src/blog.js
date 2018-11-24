const express = require('express')
const next = require('next')
const util = require('blink-util')
const R = require('ramda')
const db = require('./db/db')
const dev = process.env.NODE_ENV !== "production"

module.exports = {
  /**
  * @param {next.Server} app
  */
  WithApp: async function (app) {
    let Router = express.Router()

    return Router
  }
}