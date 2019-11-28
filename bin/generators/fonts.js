const fs = require('fs-extra')
const emoji = require('node-emoji')

const { wappDir } = require('../constants')

module.exports = async () => {
  const successMessage = `${emoji.get('white_check_mark')}  Fonts generated `
  const projectRootDirectory = process.cwd()
  const outputFile = `${wappDir}_fonts.js`
  const { typogrpahy } = require(`${projectRootDirectory}/.wapp.manifest.js`)

  if (typogrpahy) {
    const { fonts } = typogrpahy
    if (fonts) {
      const { source = 'googleFonts' } = fonts
      const stringArray = fonts.map((font) => {
        return functions[source]({ font })
      })

      const stringJoin = stringArray.join(' ')
      const masterString = `module.exports = ${'`'}${stringJoin}${'`'}`

      fs.outputFile(outputFile, masterString, (err) => {
        if (err) throw err
        console.log(successMessage)
      })
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
  }
}
