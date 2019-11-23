const fs = require('fs-extra')
const emoji = require('node-emoji')

const projectRootDirectory = process.cwd()
const { firebase } = require(`${projectRootDirectory}/.wapp.manifest`)

module.exports = async () => {
  const successMessage = `${emoji.get('white_check_mark')}  Firebase generated`

  if (firebase) {
    const { config } = firebase
    const configString = JSON.stringify(config)
    const outputFile = `${projectRootDirectory}/src/firebase/_firebase.js`
    const fileContent = `import firebase from 'firebase/app'
import enablePersistance from '@tenjojeremy/web-toolkit/build/Database/Firestore/Utils/firestore.persistance'
import enablePerfMonitoring from '@tenjojeremy/web-toolkit/build/Analytics/Firebase/analytics.index'
    
firebase.initializeApp(${configString})
    
enablePerfMonitoring(firebase)
enablePersistance(firebase)    
    `
    try {
      await fs.outputFile(outputFile, fileContent)
      console.log(successMessage)
    } catch (err) {
      throw err
    }
  }
}
