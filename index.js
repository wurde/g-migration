'use strict'

/**
 * Dependencies
 */

const fs = require('fs')

/**
 * Locals
 */

let now = new Date()
let year = now.getFullYear()
let month = now.getMonth() + 1
let day = now.getDate()
let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()

let timestamp = `${year}${month}${day}${hours}${minutes}${seconds}`

/**
 * Ensure ./db directory exists
 */

fs.stat('./db', (err, stats) => {
  if (err) { throw err }
  if (!stats.isDirectory()) {
    throw new Error('./db is not a recognized directory.')
  }
})

/**
 * Exports timestamp
 */

module.exports = timestamp
