// ads package json to comopnent folder to anable npm link to projects/portfolio @tenjojeremy/wapp-build
const createFile = require('../files/createFile')
const { wappRootDir } = require('../getModulePath')
const { name } = require('../../components/constants')
const outputPath = wappRootDir('components/_build/package.json')
const content = `
  {
    "name": "${name}"
  }
`
createFile(outputPath, content, true)
