const { projectRoot } = require('../utils/getModulePath')
const createFile = require('../utils/createFile')
const { logSuccessMessage } = require('../utils/logMessage')

module.exports = async ({ wappManifest: { authentication } }) => {
  if (authentication) {
    const successMessage = `Account generated`
    const providerName = `AuthProvider`
    const authImport = `@tenjojeremy/web-toolkit/build/Authentication/UseAuth/useAuth.index.js`
    const outputFileProvider = projectRoot('src/user/auth.state.js')
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
