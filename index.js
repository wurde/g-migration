'use strict'

let now = new Date()
let year = now.getFullYear()
let month = now.getMonth() + 1
let day = now.getDate()
let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()

let timestamp = `${year}${month}${day}${hours}${minutes}${seconds}`

/**
 * Exports timestamp
 */

module.exports = timestamp
