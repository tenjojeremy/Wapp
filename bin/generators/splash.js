const { existsSync } = require('fs')

const emoji = require('node-emoji')
const { convertFile: convertToPNG } = require('convert-svg-to-png')

const { projectRoot } = require('../utils/getModulePath')

module.exports = async ({
  wappManifest: {
    projectInfo: {
      logo: { path },
    },
  },
}) => {
  const svgFile = projectRoot(`${path}/logo.svg`)
  const pngFile = projectRoot(`${path}/logo.png`)
  const pngExists = existsSync(pngFile)
  const createdSVGMessage = `${emoji.get('white_check_mark')}  logo.png created`

  if (!pngExists) {
    await convertToPNG(svgFile)
    console.log(createdSVGMessage)
  }

  console.log(svgFile)
}
