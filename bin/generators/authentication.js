const fs = require('fs')

const projectRootDirectory = process.cwd()
const wappManifest = require(`${projectRootDirectory}/.wapp.manifest`)

module.exports = async () => {
  const pagesSrc = `${projectRootDirectory}/src/authentication.js`
  const outputPagesFolder = `${projectRootDirectory}/.wapp/authentication.js`

  fs.copyFile(pagesSrc, outputPagesFolder, (err) => {
    if (err) throw err
    // console.log('authenticaiton created')
  })
}
