const projectRootDirectory = process.cwd()

const firebaseConfig = `${projectRootDirectory}/src/firebase/firebase.config`

module.exports = {
  projectInfo: {
    name: 'App',
    shortName: 'App',
    description: 'App',
    colors: {
      primary: '#6200ee',
      background: '#6200ee'
    },
    logo: {
      path: './defaults/images/logo/logo.png'
    }
  },
  authentication: 'firebase',
  firebase: {
    config: firebaseConfig
  }
}
