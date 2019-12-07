const emoji = require('node-emoji')

const createFile = require('../utils/createFile')
const { wappDir } = require('../utils/getModulePath')

module.exports = async ({ wappManifest: { typogrpahy } }) => {
  const successMessage = `${emoji.get('white_check_mark')}  Fonts generated `
  const outputFile = wappDir('_fonts.js')

  if (typogrpahy) {
    const { fonts, source = 'googleFonts' } = typogrpahy
    if (fonts) {
      const stringArray = fonts.map((font) => {
        return functions[source]({ font })
      })

      const stringJoin = stringArray.join(' ')
      const masterString = `module.exports = ${'`'}${stringJoin}${'`'}`

      createFile(outputFile, masterString)
      console.log(successMessage)
    }
  }
}

const functions = {
  googleFonts: ({ font }) => {
    let fontInfo = ''
    const type = typeof font

    if (type === 'string') {
      const nameUpper = font.charAt(0).toUpperCase() + font.slice(1)
      fontInfo = nameUpper
    } else {
      const { name, weights } = font
      const nameUpper = name.charAt(0).toUpperCase() + name.slice(1)
      const weightsString = weights.join(',')
      fontInfo = `${nameUpper}:${weightsString}`
    }

    return `<link href="https://fonts.googleapis.com/css?family=${fontInfo}&display=swap" rel="stylesheet">`
  },
}
