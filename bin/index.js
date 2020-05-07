#!/usr/bin/env node

const arg1 = process.argv[2]

require(`./${arg1}/index.js`)()
