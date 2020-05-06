const concurrently = require('concurrently')

const createWappBuild = require('../../generators/createWappBuild')
const { logSuccessMessage } = require('../../utils/logMessage')
const webpack = require('../../webpack')

module.exports = async () => {
  const { isTest } = global
  const env = 'dev'
  const wappManifestPath = isTest
    ? '../../.testApp/.wapp.manifest'
    : projectDir('.wapp.manifest.js')
  const wappManifest = require(wappManifestPath)

  console.log()
  logSuccessMessage('Building wapp...', '', '', '1/2')
  console.log()

  await createWappBuild(env, wappManifest)

  logSuccessMessage('Starting dev server...', '', '', '2/2')
  console.log()
  webpack('start')
  // await concurrently(scripts)
}
