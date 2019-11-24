const shell = require('shelljs')

const wappRoot = require('../utils/getModulePath')

module.exports = async () => {
  const wappWebpackManifest = `${wappRoot('')}.webpack.manifest.js`

  shell.exec(`yarn webpack-scripts build ${wappWebpackManifest}`)
}
