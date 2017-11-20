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
    fs.readdir('./db', (err, files) => {
      for (let i=0; i<files.length; i++) {
        fs.unlinkSync(`./db/${files[i]}`)
      }
    })
  })

  it("should have tests", () => {
    assert.ok(true)
  })
  it("should return a timestamp of length 14", () => {
    assert.equal(g_migration.length, 14)
  })
  it("should require a ./db directory exists", (done) => {
    done()
  })
  it("should create migration file", () => {
    // TODO count number of files, 1
  })
})
