const shell = require('../../utils/shell/index')
const { wappRootDir, projectDir } = require('../../utils/getModulePath')
const generateConfig = require('../../generators/docs/config')

module.exports = async () => {
  const {
    projectInfo: { name },
    docs: {
      config: {
        port = 6006,
        configPath = projectDir('./src/.wapp/_storybook'),
        ...restConfig
      },
    },
  } = require(wappRootDir('.webpack.manifest.js'))
  const command = `npx start-storybook --quiet -p ${port} -c ${configPath}`

  await generateConfig({ name, restConfig })

  shell(command)
}
