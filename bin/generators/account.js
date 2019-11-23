const fs = require('fs-extra')

const wappRoot = require('../utils/getModulePath')

const projectRootDirectory = process.cwd()
const { authentication } = require(`${projectRootDirectory}/.wapp.manifest`)

module.exports = async () => {
  if (authentication) {
    const providerName = `AuthProvider`
    const outputFileProvider = `${projectRootDirectory}/src/store/_auth.js`
    const fileContentProvider = `import state, { ${providerName} } from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/${authentication}.index.js'    

export default state

export { ${providerName} }
    `
    const outputFileState = `${wappRoot()}/defaults/account/store/auth.js`
    const fileContentState = `import state from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/${authentication}.index.js'    

export default state
    `
    const authWrapper = `${wappRoot()}/defaults/account/auth.js`
    const authWrapperOutput = `${projectRootDirectory}/src/auth.js`

    const stateUser = `${wappRoot()}/defaults/account/store/user.js`
    const stateUserOutput = `${projectRootDirectory}/src/store/_user.js`

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
