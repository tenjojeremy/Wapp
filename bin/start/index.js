const concurrently = require('concurrently')

const { wappManifest } = require('../../utils/getModulePath')
const createWappBuild = require('../../generators/createWappBuild')
const { logSuccessMessage } = require('../../utils/logMessage')
const webpack = require('../../webpack')

module.exports = async () => {
  const env = 'dev'
  const manifest = wappManifest()

  console.log()
  logSuccessMessage('Building wapp...', '', '', '1/2')
  console.log()

  await createWappBuild(env, manifest)

  logSuccessMessage('Starting dev server...', '', '', '2/2')
  console.log()
  try {
    webpack('start')
    // await concurrently(scripts)
  } catch (error) {
    console.log('HERE!')
  }
}
