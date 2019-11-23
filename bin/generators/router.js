const fs = require('fs-extra')
const filehound = require('filehound')

module.exports = async () => {
  const projectRootDirectory = process.cwd()
  const defaultRouter = `${projectRootDirectory}/defaults/router/router.js`
  const outputFile = `${projectRootDirectory}/src/pages/router.js`
  const pagesSrc = `${projectRootDirectory}/src/pages`
  const files = await filehound
    .create()
    .path(pagesSrc)
    .find()
  const splitFiles = files.map((path) =>
    path
      .split('\\')
      .pop()
      .split('.')
      .shift()
  )
  const hasRouter = splitFiles.includes('router')

  if (!hasRouter) {
    await fs.copy(defaultRouter, outputFile)
  }
}
