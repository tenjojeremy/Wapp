#!/usr/bin/env node

const linkPackageToProject = require('../utils/linking/project')
const { name } = require('../components/constants')
const arg1 = process.argv[2]

linkPackageToProject(name)

require(`./${arg1}/index.js`)()
