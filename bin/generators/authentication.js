const fs = require('fs')

module.exports = async () => {
  const projectRootDirectory = process.cwd()
  const pagesSrc = `${projectRootDirectory}/src/authentication.js`
  const outputPagesFolder = `${projectRootDirectory}/.wapp/authentication.js`

  fs.copyFile(pagesSrc, outputPagesFolder, (err) => {
    if (err) throw err
    // console.log('authenticaiton created')
  })
}
