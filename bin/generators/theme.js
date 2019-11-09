const fs = require('fs-extra')
const filehound = require('filehound')

const toCSSVariable = require('../converters/cssVariables')

module.exports = async () => {
  let srcDefaultMerge = {}
  const projectRootDirectory = process.cwd()
  const outputFile = `${projectRootDirectory}/.wapp/theme.js`
  const defaultDir = 'defaults/theme'
  const srcThemeDir = `${projectRootDirectory}/src/theme`
  let defaultStringsObject = {}

  let cssString = `module.exports = ${'`'}
  <style type="text/css">
  `
  // loop theme folder
  const directoriesDefault = await filehound
    .create()
    .path(defaultDir)
    .find()

  const directoriesSrc = await filehound
    .create()
    .path(srcThemeDir)
    .find()

  // merge default objects
  const totalObjectDefault = {}

  directoriesDefault.map((path) => {
    const inputPath = `${projectRootDirectory}/${path}`
    const itemContent = require(inputPath)
    const itemType = typeof itemContent
    const itemName = path
      .split('\\')
      .pop()
      .split('.')
      .shift()

    if (itemType === 'object') {
      Object.assign(totalObjectDefault, { [itemName]: itemContent })
    }
    if (itemType === 'string') {
      defaultStringsObject[itemName] = itemContent
    }
  })

  // merge src objects
  const totalObjectSrc = {}

  directoriesSrc.map((path) => {
    const inputPath = `${path}`
    const itemContent = require(inputPath)
    const itemType = typeof itemContent
    const itemName = path
      .split('\\')
      .pop()
      .split('.')
      .shift()

    if (itemType === 'object') {
      Object.assign(totalObjectSrc, { [itemName]: itemContent })
    }
    if (itemType === 'string') {
      defaultStringsObject[itemName] = itemContent
    }
  })

  // merge default and src and defaultStringsObject
  srcDefaultMerge = {
    ...totalObjectDefault,
    ...totalObjectSrc,
    ...defaultStringsObject
  }

  Object.entries(srcDefaultMerge).forEach(([key, value]) => {
    const itemType = typeof value

    if (itemType === 'string') {
      cssString += `\n/* ${key} */
      ${value}`
    } else if (key === 'colors') {
      cssString += toCSSVariable('color', value)
    } else if (key === 'typography') {
      cssString += handleTypography(value)
    } else if (itemType === 'object') {
      cssString += toCSSVariable(key, value)
    }
  })

  // end
  cssString += `\n 
  </style>${'`'}`

  fs.outputFile(outputFile, cssString, (err) => {
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
