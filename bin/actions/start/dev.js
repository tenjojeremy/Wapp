const concurrently = require('concurrently')

const { wappRootDir, projectDir } = require('../../utils/getModulePath')
const generateSplash = require('../../generators/splash')
const generateBabel = require('../../generators/babel')
const { initGenerateAppIndex, generateAppIndex } = require('../../generators/appIndex')
const generateFirebase = require('../../generators/firebase')
const generateTheme = require('../../generators/theme/theme')
const generateRouter = require('../../generators/router')
const { generateStoreAndListen } = require('../../generators/store')
const generateAccount = require('../../generators/account')
const generateFonts = require('../../generators/fonts')
const {
  initExtraBuildFiles,
  generateAddExtraBuildFiles,
} = require('../../generators/extraBuildFiles')
const { initBodyTag, generateAddBodyTag } = require('../../generators/bodyTag')
const offlineSupport = require('../../generators/offlineSupport')

module.exports = async (additionalScripts) => {
  const webpackManifest = wappRootDir('.webpack.manifest.js')
  const wappManifest = require(projectDir('.wapp.manifest.js'))
  const scripts = [`yarn webpack-scripts start ${webpackManifest}`]

  if (additionalScripts) scripts.push(additionalScripts)

  try {
    initGenerateAppIndex()
    initExtraBuildFiles()
    initBodyTag()
    await generateSplash({ wappManifest })
    await generateBabel({ wappManifest })
    await generateFirebase({ wappManifest })
    await generateTheme({ wappManifest })
    await generateRouter({ wappManifest })
    await generateAccount({ wappManifest })
    await generateStoreAndListen({ wappManifest })
    await generateFonts({ wappManifest })
    await generateAddExtraBuildFiles({ wappManifest })
    await generateAddBodyTag({ wappManifest })
    await offlineSupport({ wappManifest })
    await generateAppIndex({ wappManifest })

    console.log()

    await concurrently(scripts)
  } catch (err) {
    throw err
  }
}
