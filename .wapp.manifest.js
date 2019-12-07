const firebaseConfig = require(`./src/firebase/firebase.config`)
const colors = require('./defaults/theme/colors')

module.exports = {
  projectInfo: {
    name: 'Wapp',
    shortName: 'Wapp',
    description: 'Wapp',
    startUrl: '/',
    colors,
    logo: {
      path: 'src/Images/Logo/logo.png',
    },
  },
  typogrpahy: {
    fonts: ['roboto', { name: 'montserrat', weights: [500] }],
  },
  theme: { vendors: 'materialui' },
  authentication: 'firebase',
  firebase: {
    config: firebaseConfig,
  },
  docs: {
    config: { port: 6006, panelPosition: 'right', theme: { base: 'dark' }, showPanel: false },
  },
}
