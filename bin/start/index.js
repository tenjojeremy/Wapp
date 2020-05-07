const concurrently = require('concurrently')

const { projectDir } = require('../../utils/getModulePath')
const createWappBuild = require('../../generators/createWappBuild')
const { logSuccessMessage } = require('../../utils/logMessage')
const webpack = require('../../webpack')

module.exports = async () => {
  const isTest = process.env.TEST === 'true'
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
  try {
    webpack('start')
    // await concurrently(scripts)
  } catch (error) {
    console.log('HERE!')
  }
}
