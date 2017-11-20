'use strict'

/**
 * Dependencies
 */

const assert = require('assert')
const g_migration = require('./index.js')
const fs = require('fs')

/**
 * Assertions
 */

describe("g_migration", () => {
  after(() => {
    fs.readdir('./db/migrations', (err, files) => {
      if (err) { throw err }
      for (let i=0; i<files.length; i++) {
        fs.unlinkSync(`./db/migrations/${files[i]}`)
      }
    })
  })

  it("should have tests", () => {
    assert.ok(true)
  })
  it("should return a timestamp of length 14", () => {
    assert.equal(g_migration.length, 14)
  })
  it("should require a ./db/migrations directory exists", (done) => {
    done()
  })
  it("should create migration file", (done) => {
    fs.readdir('./db/migrations', (err, files) => {
      assert.equal(files.length, 1)
      done()
    })
  })
})
