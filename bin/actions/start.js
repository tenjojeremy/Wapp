const chokidar = require('chokidar')
const concurrently = require('concurrently')

const wappRoot = require('../utils/getModulePath')
const generateAppIndex = require('../generators/appIndex')
const generateFirebase = require('../generators/firebase')
const generateTheme = require('../generators/theme')
const generateRouter = require('../generators/router')
const generateStore = require('../generators/store')
const generateAccount = require('../generators/account')
const generateFonts = require('../generators/fonts')

module.exports = async () => {
  const projectRootDirectory = process.cwd()
  const storeDirPath = `${projectRootDirectory}/src/store`
  const webpackManifest = wappRoot('.webpack.manifest.js')
  const appManifest = wappRoot('.wapp.manifest.js')

  try {
    await generateAppIndex(appManifest)
    await generateFirebase(appManifest)
    await generateTheme(appManifest)
    await generateRouter(appManifest)
    await generateAccount(appManifest)
    await generateStore(appManifest)
    await generateFonts(appManifest)

    chokidar.watch(storeDirPath).on('add', async () => await generateStore())
    chokidar.watch(storeDirPath).on('unlink', async () => await generateStore())

    console.log()

    await concurrently([`yarn webpack-scripts start ${webpackManifest}`])
  } catch (err) {
    throw err
  }
}
