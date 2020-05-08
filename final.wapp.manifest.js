const colors = require('./butler/defaults/theme/colors')
const { projectDir, wappDir } = require('./butler/utils/getModulePath')

const fonts = require(wappDir(`fonts`))
const splashScreen = require(wappDir('splashScreen/splashScreen'))
const headCss = require(wappDir('theme'))
const extraBuildFiles = require(wappDir('extraBuildFiles'))
let bodyTag = require(wappDir('bodyTag'))
const userWappManifest = require(projectDir('.wapp.manifest.js'))
const entry = projectDir('src/_index.js')
const outputPath = projectDir('_build')
const headTags = fonts
bodyTag = `${bodyTag}${splashScreen}`

const defaultWappManifest = {
  projectInfo: {
    name: 'Wapp',
    shortName: 'Wapp',
    description: 'Wapp',
    startUrl: '/',
    colors,
    logo: {
      path: './defaults/images/logo/',
    },
  },
  webpack: {
    devServer: {
      port: 3001,
    },
    entry,
    output: {
      path: outputPath,
    },
    plugins: {
      html: {
        bodyHtmlSnippet: bodyTag,
        headTags,
        headCss,
      },
      copy_webpack_plugin: extraBuildFiles,
    },
  },
}

module.exports = { ...defaultWappManifest, ...userWappManifest }
