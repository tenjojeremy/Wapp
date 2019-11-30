const emoji = require('node-emoji')

const createFile = require('../utils/createFile')

module.exports = async () => {
  const successMessage = `${emoji.get('white_check_mark')}  Babel generated `
  const projectRootDirectory = process.cwd()
  const outputFile = `${projectRootDirectory}/.babelrc.js`

  let cssString = `module.exports = {
    extends: './node_modules/@tenjojeremy/webpack-config/.babelrc'
}`

  // write to  file
  createFile(outputFile, cssString)
  console.log(successMessage)
}
