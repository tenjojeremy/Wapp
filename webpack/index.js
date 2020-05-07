const shell = require('shelljs')

const { logSuccessMessage } = require('../utils/logMessage')
const { projectDir, wappRootDir } = require('../utils/getModulePath')

module.exports = ({ action, step = '2/2' }) => {
  const envTest = process.env.TEST === 'true' ? '--env.test' : ''
  const configFilePath = wappRootDir('webpack/config.js')
  const wappManifestPath = wappRootDir('final.wapp.manifest.js')
  const actions = {
    start: {
      command: `webpack-dev-server  --config ${configFilePath} --mode development --color --hot --inline --wappManifestPath ${wappManifestPath} ${envTest}}`,
      log: 'Starting dev server...',
    },
    build: {
      command: `webpack --config ${configFilePath} -p --wappManifestPath ${wappManifestPath} --color ${envTest}`,
      log: 'Building webpack .build...',
    },
    analyze: {
      command: `webpack-bundle-analyzer --port 4200 ${projectDir}/build/stats.json`,
      log: 'Analyzing bundle...',
    },
  }
  const log = actions[action].log
  const command = actions[action].command

  logSuccessMessage(log, '', '', step)
  console.log()

  shell.exec(command)
}
