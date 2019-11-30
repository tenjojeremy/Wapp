const filehound = require('filehound')
const emoji = require('node-emoji')

const { wappDir } = require('../../constants')
const wappRoot = require('../../utils/getModulePath')
const toCSSVariable = require('../../converters/cssVariables')
const createFile = require('../../utils/createFile')

module.exports = async ({ wappManifest }) => {
  const {
    theme: { vendors },
  } = wappManifest
  const successMessage = `${emoji.get('white_check_mark')}  Theme generated `
  let srcDefaultMerge = {}
  const projectRootDirectory = process.cwd()
  const outputFile = `${wappDir}_theme.js`
  const defaultDir = `${wappRoot()}/theme`
  const srcThemeDir = `${projectRootDirectory}/src/theme`
  const colors = require(`${projectRootDirectory}/src/theme/colors`)
  let defaultStringsObject = {}

  // reset file
  createFile(outputFile, '')

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
    const itemContent = require(path)
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
    const itemContent = require(path)
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
    ...defaultStringsObject,
  }

  Object.entries(srcDefaultMerge).forEach(([key, value]) => {
    const itemType = typeof value

    if (key === '_theme') {
      return null
    } else if (itemType === 'string') {
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

  // write to  file
  createFile(outputFile, cssString)
  console.log(successMessage)

  // handle vendors
  if (vendors) {
    const addVendor = require(`./vendors/${vendors}`)
    addVendor({ colors })
  }
}

const handleTypography = (object) => {
  let string = ''

  // Variables
  string += toCSSVariable('fonts', object.variables)

  // Types
  string += object.types

  // Resets
  string += object.resets

  return string
}
