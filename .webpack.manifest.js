const localIp = require('get-my-local-ip')

const colors = require('./defaults/theme/colors')

const projectRootDirectory = process.cwd()
const fonts = require(`${projectRootDirectory}/src/.wapp/_fonts`)
const headCss = require(`${projectRootDirectory}/src/.wapp/_theme`)
const appManifest = require(`${projectRootDirectory}/.wapp.manifest.js`)
const headTags = `${fonts}`

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
  webpack: {
    devServer: {
      port: 3001,
      host: localIp.address
    },
    entry: `${projectRootDirectory}/src/_index.js`,
    plugins: {
      html: {
        bodyHtmlSnippet: '',
        headTags,
        headCss
      }
    }
  }
}

module.exports = { ...defaultManifest, ...appManifest }
