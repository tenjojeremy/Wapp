const fs = require('fs-extra')
const emoji = require('node-emoji')

const { wappDir } = require('../constants')

module.exports = async () => {
  const successMessage = `${emoji.get('white_check_mark')}  Fonts generated `
  const projectRootDirectory = process.cwd()
  const outputFile = `${wappDir}_fonts.js`
  const { typogrpahy } = require(`${projectRootDirectory}/.wapp.manifest.js`)
  const googleFontsBase = '<link href="https://fonts.googleapis.com/css?family='

  if (typogrpahy) {
    const { fonts } = typogrpahy
    if (fonts) {
      const stringArray = fonts.map((font) => {
        const type = typeof font
        if (type === 'string') {
          const nameUpper = font.charAt(0).toUpperCase() + font.slice(1)
          return `${googleFontsBase}${nameUpper}&display=swap" rel="stylesheet">`
        } else {
          const { name, weights } = font
          const nameUpper = name.charAt(0).toUpperCase() + name.slice(1)
          const weightsString = weights.join(',')
          return `${googleFontsBase}${nameUpper}:${weightsString}&display=swap" rel="stylesheet">`
        }
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
