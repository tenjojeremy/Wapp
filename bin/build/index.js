const createWappBuild = require('../../generators/createWappBuild')
const webpack = require('../../webpack')

module.exports = async () => {
  const env = 'prod'

  await createWappBuild(env)
  webpack('build')
  process.exit()
}
