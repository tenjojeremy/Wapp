const shell = require('shelljs')

const { wappRoot } = require('../../utils/getModulePath')

module.exports = async () => {
  const wappWebpackManifest = wappRoot('.webpack.manifest.js')
  const configPath = './src/.wapp/storybook'
  const port = 6006
  const command = `yarn start-storybook -p ${port} -c ${configPath}`

  shell.exec(command)
}
