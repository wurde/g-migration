#!/usr/bin/env node

'use strict'

/**
 * Dependencies
 */

const fs = require('fs')

/**
 * Locals
 */

let now = new Date()
let year = (now.getFullYear() < 10 ? '0' : '') + now.getFullYear()
let month = ((now.getMonth() + 1) < 10 ? '0' : '') + (now.getMonth() + 1)
let day = (now.getDate() < 10 ? '0' : '') + now.getDate()
let hours = (now.getHours() < 10 ? '0' : '') + now.getHours()
let minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes()
let seconds = (now.getSeconds() < 10 ? '0' : '') + now.getSeconds()

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
 * Create migration file
 */

fs.writeFile(`./db/${timestamp}`, "'use strict'\n", {
  "encoding": "utf8",
  "flag": 'wx',
  "mode": 0o755
}, (err) => {
  if (err) { throw err }
})

/**
 * Exports timestamp
 */

module.exports = timestamp
