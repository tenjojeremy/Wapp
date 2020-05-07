const createWappBuild = require('../../generators/createWappBuild')
const { wappManifest } = require('../../utils/getModulePath')
const webpack = require('../../webpack')

module.exports = async () => {
  const env = 'prod'
  const manifest = wappManifest()

  await createWappBuild(env, manifest)
  webpack('build')
  process.exit()
}
