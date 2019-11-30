const fs = require('fs-extra')
const emoji = require('node-emoji')

module.exports = async () => {
  const successMessage = `${emoji.get('white_check_mark')}  Babel generated `
  const projectRootDirectory = process.cwd()
  const outputFile = `${projectRootDirectory}/.babelrc.js`

  let cssString = `module.exports = {
    extends: './node_modules/@tenjojeremy/webpack-config/.babelrc'
}`

  // write to  file
  fs.outputFile(outputFile, cssString, (err) => {
    if (err) throw err
    console.log(successMessage)
  })
}
