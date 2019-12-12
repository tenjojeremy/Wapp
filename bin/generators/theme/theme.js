const filehound = require('filehound')
const emoji = require('node-emoji')
const fs = require('fs-extra')

const { wappRoot, projectRoot, wappDir } = require('../../utils/getModulePath')
const toCSSVariable = require('../../converters/cssVariables')
const createFile = require('../../utils/createFile')

const genDoc = require('./story')

module.exports = async ({ wappManifest }) => {
  const {
    theme: { vendors },
  } = wappManifest
  const successMessage = `${emoji.get('white_check_mark')}  Theme generated `
  let srcDefaultMerge = {}
  const outputFile = wappDir('_theme.js')
  const defaultDir = wappRoot('defaults/theme')
  const srcThemeDir = projectRoot('src/theme')
  const colors = require(projectRoot('src/theme/colors'))
  let defaultStringsObject = {}
  const totalObjectSrc = {}
  let directoriesSrc = []
  let cssString = `module.exports = ${'`'}
  <style type="text/css">
  `
  // reset file
  createFile(outputFile, '')
  // copy default files to src without overwriting
  await fs.copySync(defaultDir, srcThemeDir, { overwrite: false })

  directoriesSrc = await filehound
    .create()
    .path(srcThemeDir)
    .ext('js')
    .find()

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
  await createFile(outputFile, cssString)
  console.log(successMessage)

  // handle vendors
  if (vendors) {
    const addVendor = require(`./vendors/${vendors}`)
    addVendor({ colors })
  }

  // write storybook file
  genDoc(cssString)
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
