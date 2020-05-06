const { wappDir, componentImportPath } = require('../getModulePath')
const createFile = require('../files/createFile')
const { logSuccessMessage } = require('../logMessage')

module.exports = async (isTest) => {
  const successMessage = `Account generated`
  const providerName = `AuthProvider`
  const authImport = `${componentImportPath(isTest)}/authentication/useAuth`
  const outputFileProvider = wappDir('user/auth.state.js')
  const fileContentProvider = `
    import state, { ${providerName} } from '${authImport}'    

    export default state

    export { ${providerName} }
    `

  await createFile(outputFileProvider, fileContentProvider)
  logSuccessMessage(successMessage)
}
