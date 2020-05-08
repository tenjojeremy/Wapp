const { wappDir } = require('../getModulePath')
const createFile = require('../files/createFile')
const { logSuccessMessage } = require('../logMessage')

module.exports = async ({ componentsPackageName }) => {
  const successMessage = `IsOnline Provider generated`
  const providerName = `IsOnlineProvider`
  const authImport = `${componentsPackageName}/utils/network/useIsOnline`
  const outputFileProvider = wappDir('network/isOnline.state.js')
  const fileContentProvider = `
    import state, { ${providerName} } from '${authImport}'    

    export default state

    export { ${providerName} }
    `

  await createFile(outputFileProvider, fileContentProvider)
  logSuccessMessage(successMessage)
}
