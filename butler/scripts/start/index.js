const concurrently = require('concurrently')

const { wappManifest: getWappManifest } = require('../../utils/getModulePath')
const createWappBuild = require('../../generators/createWappBuild')
const webpack = require('../../webpack')

module.exports = async () => {
  const env = 'dev'
  const wappManifest = getWappManifest()
  const action = 'start'

  await createWappBuild({ env, wappManifest })

  webpack({ action })
  // await concurrently(scripts)
}
