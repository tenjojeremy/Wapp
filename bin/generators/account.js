const fs = require('fs-extra')
const emoji = require('node-emoji')

const wappRoot = require('../utils/getModulePath')

const projectRootDirectory = process.cwd()
const { authentication } = require(`${projectRootDirectory}/.wapp.manifest`)

const successMessage = `${emoji.get('white_check_mark')}  Account generated `

module.exports = async () => {
  if (authentication) {
    const providerName = `AuthProvider`
    const outputFileProvider = `${projectRootDirectory}/src/store/auth.js`
    const fileContentProvider = `import state, { ${providerName} } from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/${authentication}.index.js'    

export default state

export { ${providerName} }
    `
    const outputFileState = `${wappRoot()}/account/store/auth.js`
    const fileContentState = `import state from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/${authentication}.index.js'    

export default state
    `

    const stateUser = `${wappRoot()}/account/store/user.js`
    const stateUserOutput = `${projectRootDirectory}/src/store/user.js`

    try {
      // 1. create provider file
      await fs.outputFile(outputFileProvider, fileContentProvider)

      // 2. create auth helper function
      await fs.outputFile(outputFileState, fileContentState)

      // 3. create user state
      await fs.copy(stateUser, stateUserOutput)
      console.log(successMessage)
    } catch (err) {
      throw err
    }
  }
}
