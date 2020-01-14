const concurrently = require('concurrently')

const { wappRootDir } = require('../../utils/getModulePath')
const createWappBuild = require('../createWappBuild')

module.exports = async (additionalScripts) => {
  const webpackManifest = wappRootDir('.webpack.manifest.js')
  const scripts = [`yarn webpack-scripts start ${webpackManifest}`]

  if (additionalScripts) scripts.push(additionalScripts)

  try {
    await createWappBuild('dev')
    await concurrently(scripts)
  } catch (err) {
    throw err
  }
}
