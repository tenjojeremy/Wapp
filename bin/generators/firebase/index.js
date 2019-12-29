const addToIndex = require('../../utils/addToIndex')
const createFile = require('../../utils/createFile')
const { wappDir } = require('../../utils/getModulePath')
const { logSuccessMessage } = require('../../utils/logMessage')

module.exports = async ({
  wappManifest: { firebase, authentication, database, pushNotifications },
}) => {
  const isPushNotificationsEnabled = pushNotifications === 'firebase'
  const successMessage = `Firebase generated`
  const appImport = `import firebase from 'firebase/app'`
  const authImport = authentication === 'firebase' ? `import 'firebase/auth'` : ''
  const firestoreImport = database === 'firestore' ? `import 'firebase/firestore'` : ''

  const firebaseImports = `
  ${appImport}
  ${authImport}
  ${firestoreImport}
  `

  if (firebase) {
    const { config } = firebase
    const configString = JSON.stringify(config)
    const outputFile = wappDir('firebase/index.js')
    const fileContent = `
${firebaseImports}
import enablePersistance from '@tenjojeremy/web-toolkit/build/Database/Firestore/Utils/firestore.persistance'
import enablePerfMonitoring from '@tenjojeremy/web-toolkit/build/Analytics/Firebase/analytics.index'
    
firebase.initializeApp(${configString})
    
enablePerfMonitoring(firebase)
enablePersistance(firebase)    
    `
    try {
      if (isPushNotificationsEnabled) await require('./pushNotifications')()
      await createFile(outputFile, fileContent)
      addToIndex({ name: 'Firebase/index', onlyImport: true })
      logSuccessMessage(successMessage)
    } catch (err) {
      throw err
    }
  }
}
