const localIp = require('get-my-local-ip')

const colors = require('./defaults/theme/colors')
const { projectRoot } = require('./bin/utils/getModulePath')

const fonts = require(projectRoot('src/.wapp/_fonts'))
const splashScreen = require(projectRoot('src/.wapp/splashScreen/splashScreen'))
const headCss = require(projectRoot('src/.wapp/_theme'))
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
      host: localIp.address,
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
