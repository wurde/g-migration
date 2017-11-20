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
  it("should have tests", () => {
    assert.ok(true)
  })
  it("should return a timestamp of length 14", () => {
    assert.equal(g_migration.length, 14)
  })
})
