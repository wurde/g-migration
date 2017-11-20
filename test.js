'use strict'

/**
 * Dependencies
 */

const assert = require('assert')
const g_migration = require('./index.js')

/**
 * Assertions
 */

describe("g_migration", () => {
  afterEach(() => {
    // TODO remove all migration files
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
