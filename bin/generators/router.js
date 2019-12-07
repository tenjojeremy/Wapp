const fs = require('fs-extra')
const filehound = require('filehound')
const emoji = require('node-emoji')

const { wappRoot, projectRoot } = require('../utils/getModulePath')

module.exports = async () => {
  const successMessage = `${emoji.get('white_check_mark')}  Router generated `
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
    console.log(successMessage)
  }
}
