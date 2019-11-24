const firebaseConfig = require(`./src/firebase/firebase.config`)

module.exports = {
  typogrpahy: {
    fonts: ['roboto', 'montserrat']
  },
  authentication: 'firebase',
  firebase: {
    config: firebaseConfig
  }
}
