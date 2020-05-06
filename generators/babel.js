const { projectDir, wappDir } = require('../utils/getModulePath')
const { logSuccessMessage } = require('../utils/logMessage')
const editPackageJson = require('../utils/files/editPackageJson')

module.exports = async ({ isTest }) => {
  const packageJson = require(projectDir('package.json', isTest))
  if (isTest || packageJson.babel) return null

  const successMessage = `Babel generated `
  const importPathPackageJson = './node_modules/@tenjojeremy/wapp/babel.config.js'

  editPackageJson({
    method: 'set',
    value: ['babel.extends', importPathPackageJson],
    isTest,
  })

  logSuccessMessage(successMessage)
}
