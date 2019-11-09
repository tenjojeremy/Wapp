const fs = require('fs-extra')

const projectRootDirectory = process.cwd()
const { firebase } = require(`${projectRootDirectory}/.wapp.manifest`)

module.exports = async () => {
  if (firebase) {
    const { config } = firebase
    const configString = JSON.stringify(config)
    const outputFile = `${projectRootDirectory}/.wapp/firebase.js`
    const fileContent = `import firebase from 'firebase/app'
import enablePersistance from '@tenjojeremy/web-toolkit/build/Database/Firestore/Utils/firestore.persistance'
import enablePerfMonitoring from '@tenjojeremy/web-toolkit/build/Analytics/Firebase/analytics.index'
    
firebase.initializeApp(${configString})
    
enablePerfMonitoring(firebase)
enablePersistance(firebase)    
    `
    try {
      await fs.outputFile(outputFile, fileContent)
    } catch (err) {
      throw err
    }
  }
}
