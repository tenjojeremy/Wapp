const shell = require('shelljs')

const { wappRoot, projectRoot } = require('../../utils/getModulePath')
const generateConfig = require('../../generators/docs/config')

module.exports = async () => {
  const {
    projectInfo: { name },
    docs: {
      config: {
        port = 6006,
        configPath = projectRoot('./src/.wapp/storybook'),
        ...restConfig
      },
    },
  } = require(wappRoot('.webpack.manifest.js'))
  const command = `yarn start-storybook --quiet -p ${port} -c ${configPath}`

  try {
    await generateConfig({ name, restConfig })

    shell.exec(command)
  } catch (err) {
    throw err
  }
}
