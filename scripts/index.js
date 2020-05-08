#!/usr/bin/env node

const linkPackageToProject = require('../utils/linking/project')
const arg1 = process.argv[2]

linkPackageToProject('@tenjojeremy/wapp-build')

require(`./${arg1}/index.js`)()
