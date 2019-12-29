const fs = require('fs-extra')
const filehound = require('filehound')

const { wappRoot, projectRoot } = require('../utils/getModulePath')
const { logSuccessMessage } = require('../utils/logMessage')

module.exports = async () => {
  const successMessage = `Router generated`
  const defaultRouter = wappRoot('/router/router.js')
  const outputFile = projectRoot('src/pages/router.js')
  const pagesSrc = projectRoot('src/pages')
  const files = await filehound
    .create()
    .path(pagesSrc)
    .find()
  const splitFiles = files.map((path) =>
    path
      .split('\\')
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
