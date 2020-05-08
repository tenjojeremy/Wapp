const shell = require('../../utils/shell/index')
const { wappRootDir } = require('../../utils/getModulePath')

module.exports = async () => {
  const wappWebpackManifest = wappRootDir('.webpack.manifest.js')

  shell(`npx build-storybook`)
}
