const shell = require('shelljs')

const { wappRootDir } = require('../utils/getModulePath')

const createWappBuild = require('./createWappBuild')

module.exports = async () => {
  const wappWebpackManifest = wappRootDir('.webpack.manifest.js')

  await createWappBuild('prod')
  shell.exec(`yarn webpack-scripts build ${wappWebpackManifest}`)
}
