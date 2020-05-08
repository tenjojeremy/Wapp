// ads package json to comopnent folder to anable npm link to projects/portfolio @tenjojeremy/wapp-build
const createFile = require('../files/createFile')
const { getRoot } = require('../getModulePath')
const { name } = require(getRoot('components/constants'))
const outputPath = getRoot('components/_build/package.json')
const content = `
  {
    "name": "${name}"
  }
`
createFile(outputPath, content, true)
