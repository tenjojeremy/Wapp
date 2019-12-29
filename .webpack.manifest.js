const colors = require('./defaults/theme/colors')
const { projectRoot, wappDir } = require('./bin/utils/getModulePath')

const fonts = require(wappDir('fonts'))
const splashScreen = require(wappDir('splashScreen/splashScreen'))
const headCss = require(wappDir('theme'))
const wappManifest = require(projectRoot('.wapp.manifest.js'))
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
    entry: projectRoot('src/_index.js'),
    plugins: {
      html: {
        bodyHtmlSnippet: '',
        headTags,
        headCss,
      },
    },
  },
}

module.exports = { ...defaultManifest, ...wappManifest }
