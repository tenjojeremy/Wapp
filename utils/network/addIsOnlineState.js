const { wappDir, componentImportPath } = require('../getModulePath')
const createFile = require('../createFile')
const { logSuccessMessage } = require('../logMessage')

module.exports = async ({ isTest }) => {
  const successMessage = `IsOnline Provider generated`
  const providerName = `IsOnlineProvider`
  const authImport = `${componentImportPath(isTest)}/utils/network/useIsOnline`
  const outputFileProvider = wappDir('network/isOnline.state.js')
  const fileContentProvider = `
    import state, { ${providerName} } from '${authImport}'    

    export default state

    export { ${providerName} }
    `

  await createFile(outputFileProvider, fileContentProvider)
  logSuccessMessage(successMessage)
}
