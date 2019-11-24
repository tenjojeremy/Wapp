const localIp = require('get-my-local-ip')

const colors = require('./defaults/Theme/colors')

const projectRootDirectory = process.cwd()
const headCss = require(`${projectRootDirectory}/src/theme/_theme`)
const appManifest = require(`${projectRootDirectory}/.wapp.manifest.js`)

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
        headCss
      }
    }
  }
}

module.exports = { ...defaultManifest, ...appManifest }
