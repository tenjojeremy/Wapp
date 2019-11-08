const chokidar = require('chokidar')

const generateAppIndex = require('../generators/appIndex')
const generateTheme = require('../generators/theme')
const generateRouter = require('../generators/router')
const generateStore = require('../generators/store')
const generateAuthentication = require('../generators/authentication')

module.exports = () => {
  const projectRootDirectory = process.cwd()
  const themeDirPath = `${projectRootDirectory}/src/theme`
  const pagesDirPath = `${projectRootDirectory}/src/pages`
  const storeDirPath = `${projectRootDirectory}/src/store`
  const authenticationDirPath = `${projectRootDirectory}/src/authentication`

  generateAppIndex()
  generateTheme()
  generateRouter()
  generateStore()
  generateAuthentication()

  chokidar.watch(themeDirPath).on('change', () => generateTheme())
  chokidar.watch(pagesDirPath).on('change', () => generateRouter())
  chokidar.watch(storeDirPath).on('change', () => generateStore())
  chokidar
    .watch(authenticationDirPath)
    .on('change', () => generateAuthentication())
}
