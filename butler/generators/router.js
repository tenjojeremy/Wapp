const fs = require('fs-extra')
const filehound = require('filehound')

const { wappRootDir, projectDir } = require('../utils/getModulePath')
const { logSuccessMessage } = require('../utils/logMessage')
const forwardSlash = require('../utils/strings/fowardSlash')

module.exports = async () => {
  const successMessage = `Router generated`
  const defaultRouter = wappRootDir('defaults/router/router.js')
  const outputFile = projectDir('src/pages/router.js')
  const pagesSrc = projectDir('src/pages')
  const splitValue = forwardSlash()
  const files = await filehound
    .create()
    .path(pagesSrc)
    .find()
  const splitFiles = files.map((path) =>
    path
      .split(splitValue)
      .pop()
      .split('.')
      .shift(),
  )
  const hasRouter = splitFiles.includes('router')

  if (!hasRouter) {
    await fs.copy(defaultRouter, outputFile)
    logSuccessMessage(successMessage)
  }
}
