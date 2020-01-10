const { wappDir } = require('../utils/getModulePath')
const createFile = require('../utils/createFile')
const { logSuccessMessage } = require('../utils/logMessage')

module.exports = async ({ wappManifest: { authentication } }) => {
  if (authentication) {
    const successMessage = `Account generated`
    const providerName = `AuthProvider`
    const authImport = `@tenjojeremy/web-toolkit/build/Authentication/useAuth`
    const outputFileProvider = wappDir('user/auth.state.js')
    const fileContentProvider = `
    import state, { ${providerName} } from '${authImport}'    

    export default state

    export { ${providerName} }
    `

    try {
      await createFile(outputFileProvider, fileContentProvider)
      logSuccessMessage(successMessage)
    } catch (err) {
      throw err
    }
  }
}
