const concurrently = require('concurrently')

const { wappRoot, projectRoot } = require('../utils/getModulePath')
const generateBabel = require('../generators/babel')
const generateAppIndex = require('../generators/appIndex')
const generateFirebase = require('../generators/firebase')
const generateTheme = require('../generators/theme/theme')
const generateRouter = require('../generators/router')
const { generateStoreAndListen } = require('../generators/store')
const generateAccount = require('../generators/account')
const generateFonts = require('../generators/fonts')

module.exports = async () => {
  global.indexModules = []
  const webpackManifest = wappRoot('.webpack.manifest.js')
  const wappManifest = require(projectRoot('.wapp.manifest.js'))

  try {
    await generateBabel({ wappManifest })
    await generateFirebase({ wappManifest })
    await generateTheme({ wappManifest })
    await generateRouter({ wappManifest })
    await generateAccount({ wappManifest })
    await generateStoreAndListen({ wappManifest })
    await generateFonts({ wappManifest })
    await generateAppIndex({ wappManifest })

    console.log()

    await concurrently([`yarn webpack-scripts start ${webpackManifest}`])
  } catch (err) {
    throw err
  }
}
