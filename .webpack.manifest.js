const colors = require('./defaults/theme/colors')
const { projectDir, wappDir } = require('./bin/utils/getModulePath')

const fonts = require(wappDir('fonts'))
const splashScreen = require(wappDir('splashScreen/splashScreen'))
const headCss = require(wappDir('theme'))
const extraBuildFiles = require(wappDir('extraBuildFiles'))
const wappManifest = require(projectDir('.wapp.manifest.js'))
const headTags = `${fonts}${splashScreen}`

const defaultManifest = {
  projectInfo: {
    name: 'App',
    shortName: 'App',
    description: 'App',
    startUrl: '/',
    colors,
    logo: {
      path: './defaults/images/logo/logo.png',
    },
  },
  webpack: {
    devServer: {
      port: 3001,
    },
    entry: projectDir('src/_index.js'),
    plugins: {
      html: {
        bodyHtmlSnippet: '',
        headTags,
        headCss,
      },
      copy_webpack_plugin: extraBuildFiles,
    },
  },
}

module.exports = { ...defaultManifest, ...wappManifest }
