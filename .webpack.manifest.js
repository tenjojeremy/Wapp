const localIp = require('get-my-local-ip')

const colors = require('./defaults/Theme/colors')

const headCss = require('./.wapp/theme')

const projectRootDirectory = process.cwd()
const appManifest = require(`${projectRootDirectory}/.app.manifest.js`)

const defaultManifest = {
  projectInfo: {
    name: 'App',
    shortName: 'App',
    description: 'App',
    startUrl: '/',
    colors,
    logo: {
      path: './defaults/images/logo/logo.png'
    }
  },
  analytics: {
    google: {
      analytics: { gAnalyticFunctions: { onlyViewsScript: '' } }
    }
  },
  webpack: {
    devServer: {
      port: 3001,
      host: localIp.address
    },
    entry: './.wapp/index.js',
    plugins: {
      html: {
        bodyHtmlSnippet: '',
        headCss
      }
    }
  }
}

module.exports = { ...defaultManifest, ...appManifest }
