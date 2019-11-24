#!/usr/bin/env node

const start = require('./actions/start')
const build = require('./actions/build')
const analyze = require('./actions/analyze')

const action = process.argv[2]

switch (action) {
  case 'start':
    start()
    break

  case 'build':
    build()
    break

  case 'analyze':
    analyze()
    break

  default:
    start()
    break
}
