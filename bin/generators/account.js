const fs = require('fs-extra')

const projectRootDirectory = process.cwd()
const { authentication } = require(`${projectRootDirectory}/.wapp.manifest`)

module.exports = async () => {
  if (authentication) {
    const nameUppercase =
      authentication.charAt(0).toUpperCase() + authentication.slice(1)
    const outputFileProvider = `${projectRootDirectory}/.wapp/store/providers/auth.js`
    const providerName = `${nameUppercase}AuthProvider`
    const fileContentProvider = `import { ${providerName} } from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/${authentication}.index.js'    

export default ${providerName}
    `
    const outputFileState = `./defaults/account/store/auth.js`
    const fileContentState = `import state from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/${authentication}.index.js'    

export default state
    `
    const authWrapper = './defaults/account/auth.js'
    const authWrapperOutput = `${projectRootDirectory}/.wapp/auth.js`

    const stateUser = './defaults/account/store/user.js'
    const stateUserOutput = `${projectRootDirectory}/.wapp/store/providers/user.js`

    try {
      // 1. copty authwrapper comp file to wapp
      await fs.copy(authWrapper, authWrapperOutput)

      // 2. create provider file
      await fs.outputFile(outputFileProvider, fileContentProvider)

      // 3. create auth helper function
      await fs.outputFile(outputFileState, fileContentState)

      // 4. create user state
      await fs.copy(stateUser, stateUserOutput)
    } catch (err) {
      throw err
    }
  }
}
