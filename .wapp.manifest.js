const firebaseConfig = require(`./src/firebase/firebase.config`)

module.exports = {
  typogrpahy: {
    fonts: ['roboto', { name: 'montserrat', weights: [500] }]
  },
  authentication: 'firebase',
  firebase: {
    config: firebaseConfig
  }
}
