const chokidar = require('chokidar')
const concurrently = require('concurrently')

const wappRoot = require('../utils/getModulePath')
const generateAppIndex = require('../generators/appIndex')
const generateFirebase = require('../generators/firebase')
const generateTheme = require('../generators/theme/theme')
const generateRouter = require('../generators/router')
const generateStore = require('../generators/store')
const generateAccount = require('../generators/account')
const generateFonts = require('../generators/fonts')

module.exports = async () => {
  global.indexModules = []
  const projectRootDirectory = process.cwd()
  const storeDirPath = `${projectRootDirectory}/src/store`
  const webpackManifest = wappRoot('.webpack.manifest.js')
  const wappManifest = require(wappRoot('.wapp.manifest.js'))

  try {
    await generateFirebase({ wappManifest })
    await generateTheme({ wappManifest })
    await generateRouter({ wappManifest })
    await generateAccount({ wappManifest })
    await generateStore({ wappManifest })
    await generateFonts({ wappManifest })
    await generateAppIndex({ wappManifest })

    chokidar
      .watch(storeDirPath)
      .on('add', async () => await generateStore({ wappManifest }))
    chokidar
      .watch(storeDirPath)
      .on('unlink', async () => await generateStore({ wappManifest }))

    console.log()

    await concurrently([`yarn webpack-scripts start ${webpackManifest}`])
  } catch (err) {
    throw err
  }
}
