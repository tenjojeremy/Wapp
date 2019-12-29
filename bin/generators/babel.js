const createFile = require('../utils/createFile')
const { projectRoot } = require('../utils/getModulePath')
const { logSuccessMessage } = require('../utils/logMessage')

module.exports = async () => {
  const successMessage = `Babel generated `
  const outputFile = projectRoot('.babelrc.js')

  let cssString = `module.exports = {
    extends: './node_modules/@tenjojeremy/webpack-config/.babelrc'
}`

  // write to  file
  createFile(outputFile, cssString)
  logSuccessMessage(successMessage)
}
