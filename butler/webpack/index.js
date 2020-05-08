const shell = require('../utils/shell/index')
const { logSuccessMessage } = require('../utils/logMessage')
const { projectDir, getRoot } = require('../utils/getModulePath')

module.exports = ({ action, step = '2/2' }) => {
  const configFilePath = getRoot('butler/webpack/config.js')
  const wappManifestPath = getRoot('final.wapp.manifest.js')

  const actions = {
    start: {
      command: `webpack-dev-server  --config ${configFilePath} --mode development --color --hot --inline --wappManifestPath ${wappManifestPath}`,
      log: 'Starting dev server...',
    },
    build: {
      command: `webpack --config ${configFilePath} -p --wappManifestPath ${wappManifestPath} --color`,
      log: 'Building webpack _build...',
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

  shell(command)
}
