// ads package json to comopnent folder to anable npm link to projects/jeremytenjo.com @tenjojeremy/wapp-build
const createFile = require('../files/createFile')
const { wappRootDir } = require('../getModulePath')

const outputPath = wappRootDir('components/_build/package.json')
const content = `
  {
    "name": "@tenjojeremy/wapp-build"
  }
`
createFile(outputPath, content, true)
