const fs = require('fs-extra')

const projectRootDirectory = process.cwd()
const { authentication } = require(`${projectRootDirectory}/.wapp.manifest`)

module.exports = async () => {
  if (authentication) {
    const nameUppercase =
      authentication.charAt(0).toUpperCase() + authentication.slice(1)
    const outputFile = `${projectRootDirectory}/.wapp/store/providers/authentication.js`
    const providerName = `${nameUppercase}AuthProvider`
    const fileContent = `import { ${providerName} } from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/${authentication}.index.js'
    

export default ${providerName}
    `

    // 1. create provider file
    fs.outputFile(outputFile, fileContent, (err) => {
      if (err) throw err
      // console.log('authenticaiton created')
    })
  }
}
