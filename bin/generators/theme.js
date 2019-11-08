const fs = require('fs')

const filehound = require('filehound')

const toCSSVariable = require('../converters/cssVariables')

module.exports = async () => {
  const projectRootDirectory = process.cwd()

  let cssString = `module.exports = ${'`'}
  <style type="text/css">
  `
  // loop theme folder
  const directories = await filehound
    .create()
    .path('defaults/theme')
    .find()

  directories.map((path) => {
    const inputPath = `${projectRootDirectory}/${path}`
    const itemContent = require(inputPath)
    const itemType = typeof itemContent
    const itemName = path
      .split('\\')
      .pop()
      .split('.')
      .shift()

    if (itemType === 'string') {
      cssString += `\n/* ${itemName} */ 
      ${itemContent}`
    } else if (itemName === 'colors') {
      cssString += toCSSVariable('color', itemContent)
    } else if (itemName === 'typography') {
      cssString += handleTypography(itemContent)
    }
  })

  // end
  cssString += `\n 
  </style>${'`'}`

  fs.writeFile(`./.wapp/theme.js`, cssString, (err) => {
    if (err) throw err
    // console.log(`Theme Created`)
  })
}

const handleTypography = (object) => {
  let string = ''

  // Variables
  string += toCSSVariable('typography', object.variables)

  // Types
  string += object.types

  // Resets
  string += object.resets

  return string
}
