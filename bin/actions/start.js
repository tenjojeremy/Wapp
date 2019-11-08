const fs = require('fs-extra')
const chokidar = require('chokidar')

const generateAppIndex = require('../generators/appIndex')
const generateTheme = require('../generators/theme')
const generateRouter = require('../generators/router')
const generateStore = require('../generators/store')
const generateAuthentication = require('../generators/authentication')

module.exports = async () => {
  const projectRootDirectory = process.cwd()
  const wappDir = `${projectRootDirectory}/.wapp`
  const themeDirPath = `${projectRootDirectory}/src/theme`
  const pagesDirPath = `${projectRootDirectory}/src/pages`
  const authenticationDirPath = `${projectRootDirectory}/src/authentication`
  const storeDirPath = `${projectRootDirectory}/src/store`

  await fs.remove(wappDir)

  generateAppIndex()
  generateTheme()
  generateRouter()
  generateStore()
  // generateAuthentication()

  chokidar.watch(themeDirPath).on('change', () => generateTheme())
  chokidar.watch(pagesDirPath).on('change', () => generateRouter())
  chokidar.watch(storeDirPath).on('change', () => generateStore())
  chokidar
    .watch(authenticationDirPath)
    .on('change', () => generateAuthentication())
}
