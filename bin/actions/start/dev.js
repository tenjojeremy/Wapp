const concurrently = require('concurrently')

const { wappRoot, projectRoot } = require('../../utils/getModulePath')
const generateSplash = require('../../generators/splash')
const generateBabel = require('../../generators/babel')
const generateAppIndex = require('../../generators/appIndex')
const generateFirebase = require('../../generators/firebase')
const generateTheme = require('../../generators/theme/theme')
const generateRouter = require('../../generators/router')
const { generateStoreAndListen } = require('../../generators/store')
const generateAccount = require('../../generators/account')
const generateFonts = require('../../generators/fonts')

module.exports = async (additionalScripts) => {
  global.indexModules = []
  const webpackManifest = wappRoot('.webpack.manifest.js')
  const wappManifest = require(projectRoot('.wapp.manifest.js'))
  const scripts = [`yarn webpack-scripts start ${webpackManifest}`]

  if (additionalScripts) scripts.push(additionalScripts)

  try {
    await generateSplash({ wappManifest })
    await generateBabel({ wappManifest })
    await generateFirebase({ wappManifest })
    await generateTheme({ wappManifest })
    await generateRouter({ wappManifest })
    await generateAccount({ wappManifest })
    await generateStoreAndListen({ wappManifest })
    await generateFonts({ wappManifest })
    await generateAppIndex({ wappManifest })

    console.log()

    // await concurrently(scripts)
  } catch (err) {
    throw err
  }
}
