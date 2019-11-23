const fs = require('fs-extra')
const chokidar = require('chokidar')

const generateAppIndex = require('../generators/appIndex')
const generateFirebase = require('../generators/firebase')
const generateTheme = require('../generators/theme')
const generateRouter = require('../generators/router')
const generateStore = require('../generators/store')
const generateAccount = require('../generators/account')

module.exports = async () => {
  const projectRootDirectory = process.cwd()
  const themeDirPath = `${projectRootDirectory}/src/theme`
  const pagesDirPath = `${projectRootDirectory}/src/pages`
  const accountDirPath = `${projectRootDirectory}/src/account`
  const storeDirPath = `${projectRootDirectory}/src/store`

  try {
    await generateAppIndex()
    await generateFirebase()
    await generateTheme()
    await generateRouter()
    await generateAccount()
    await generateStore()

    chokidar.watch(themeDirPath).on('change', () => generateTheme())
    chokidar.watch(pagesDirPath).on('change', () => generateRouter())
    chokidar.watch(storeDirPath).on('change', () => generateStore())
    chokidar.watch(accountDirPath).on('change', () => generateAccount())

    console.log()
  } catch (err) {
    throw err
  }
}
