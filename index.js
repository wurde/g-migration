#!/usr/bin/env node

"use strict"

/**
 * Dependencies
 */

const fs = require("fs")
const moment = require("moment")

/**
 * Locals
 */

let filename
let now = moment()
let timestamp = now.format("YYYYMMDDHHmmss")

/**
 * Accept filename as argument
 */

if (process.argv[2]) {
  filename = `_${process.argv[2]}.js`
} else {
  filename = '.js'
}

/**
 * Ensure ./db directory exists
 */

fs.stat('./db/migrations', (err, stats) => {
  if (err) { throw err }
  if (!stats.isDirectory()) {
    throw new Error('./db/migrations is not a recognized directory.')
  }
})

/**
 * Create migration file
 */

fs.writeFile(`./db/migrations/${timestamp}${filename}`,
`"use strict"

module.exports = async (db) => {
  console.log('migrations/${timestamp}${filename}')

  try {
    await db.query(\`
BEGIN TRANSACTION;

COMMIT;
    \`)
    return true
  } catch(err) {
    console.error(err)
    return false
  }
}
`, {
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
