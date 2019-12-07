const fs = require('fs-extra')
const emoji = require('node-emoji')

const { wappRoot } = require('../utils/getModulePath')
const createFile = require('../utils/createFile')

const projectRootDirectory = process.cwd()

const successMessage = `${emoji.get('white_check_mark')}  Account generated `

module.exports = async ({ wappManifest: { authentication } }) => {
  if (authentication) {
    const providerName = `AuthProvider`
    const outputFileProvider = `${projectRootDirectory}/src/user/auth.state.js`
    const fileContentProvider = `import state, { ${providerName} } from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/${authentication}.index.js'    

export default state

export { ${providerName} }
    `
    const outputFileState = wappRoot('/account/store/auth.js')
    const fileContentState = `import state from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/${authentication}.index.js'    

export default state
    `

    const stateUser = wappRoot('/account/store/user.js')
    const stateUserOutput = `${projectRootDirectory}/src/user/user.state.js`
    let hasUserState = fs.existsSync(stateUserOutput)

    try {
      // 1. create provider file
      await createFile(outputFileProvider, fileContentProvider)

      // 2. create auth helper function
      await createFile(outputFileState, fileContentState)

      // 3. create user state
      !hasUserState && (await fs.copy(stateUser, stateUserOutput))
    } catch (err) {
      throw err
    } finally {
      console.log(successMessage)
    }
  }
}
