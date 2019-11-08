const fs = require('fs-extra')

const projectRootDirectory = process.cwd()
const { authentication } = require(`${projectRootDirectory}/.wapp.manifest`)

module.exports = async () => {
  if (authentication) {
    const nameUppercase =
      authentication.charAt(0).toUpperCase() + authentication.slice(1)
    const outputFileProvider = `${projectRootDirectory}/.wapp/store/providers/authentication.js`
    const providerName = `${nameUppercase}AuthProvider`
    const fileContentProvider = `import { ${providerName} } from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/${authentication}.index.js'    

export default ${providerName}
    `
    const outputFileState = `./functions/store/auth.js`
    const fileContentState = `import state from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/${authentication}.index.js'    

export default state
    `

    // 1. create provider file
    fs.outputFile(outputFileProvider, fileContentProvider, (err) => {
      if (err) throw err
      // console.log('authenticaiton created')
    })

    // 2. create auth helper function
    fs.outputFile(outputFileState, fileContentState, (err) => {
      if (err) throw err
      // console.log('authenticaiton created')
    })
  }
}
