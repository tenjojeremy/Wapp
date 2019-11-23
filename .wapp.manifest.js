const firebaseConfig = require(`./src/firebase/firebase.config`)

module.exports = {
  authentication: 'firebase',
  firebase: {
    config: firebaseConfig
  }
}
