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

    // 1. copty authwrapper comp file to wapp
    fs.copy(authWrapper, authWrapperOutput, (err) => {
      if (err) throw err
      // console.log('authenticaiton created')
    })

    // 2. create provider file
    fs.outputFile(outputFileProvider, fileContentProvider, (err) => {
      if (err) throw err
      // console.log('authenticaiton created')
    })

    // 3. create auth helper function
    fs.outputFile(outputFileState, fileContentState, (err) => {
      if (err) throw err
      // console.log('authenticaiton created')
    })

    // 4. create user state
    fs.copy(stateUser, stateUserOutput, (err) => {
      if (err) throw err
      // console.log('authenticaiton created')
    })
  }
}
