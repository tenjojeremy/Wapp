const createWappBuild = require('../../generators/createWappBuild')
const { wappManifest: getWappManifest } = require('../../utils/getModulePath')
const webpack = require('../../webpack')

module.exports = async () => {
  const env = 'prod'
  const wappManifest = getWappManifest()
  const action = 'build'

  await createWappBuild({ env, wappManifest })
  webpack({ action })

  process.exit()
}
