const colors = require('./src/theme/colors.js')
const firebaseConfig = require(`./src/firebase/firebase.config`)

module.exports = {
  projectInfo: {
    name: 'Jeremy Tenjo | Portfolio',
    shortName: 'Jeremy Tenjo',
    description: 'Jeremy Tenjo | Portfolio',
    startUrl: '/',
    colors,
    logo: {
      path: 'src/images/logo',
    },
  },
  offlineSupport: false,
  firebase: {
    config: firebaseConfig,
  },
  docs: {
    config: {
      port: 6006,
      panelPosition: 'right',
      theme: { base: 'dark' },
      showPanel: false,
    },
  },
}
