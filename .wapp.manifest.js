const firebaseConfig = require(`./src/firebase/firebase.config`)
const serviceWorkerReceiverFunction = require(`./src/firebase/serviceWorkerReceiverFunction`)
const colors = require('./bin/defaults/theme/colors')

module.exports = {
  projectInfo: {
    name: 'Wapp',
    shortName: 'Wapp',
    description: 'Wapp',
    startUrl: '/',
    colors,
    logo: {
      path: 'bin/defaults/images/logo',
    },
  },
  animateOnSiteLoad: 500,
  offlineSupport: true,
  theme: { vendors: 'materialui' },
  authentication: 'firebase',
  database: 'firestore',
  firebase: {
    config: firebaseConfig,
    pushNotifications: serviceWorkerReceiverFunction,
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
