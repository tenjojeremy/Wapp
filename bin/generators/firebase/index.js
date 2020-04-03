const addToIndex = require('../../utils/addToIndex')
const createFile = require('../../utils/createFile')
const { wappDir } = require('../../utils/getModulePath')
const { logSuccessMessage } = require('../../utils/logMessage')

module.exports = async ({ wappManifest: { firebase } }) => {
  if (firebase) {
    const { pushNotifications, authentication, database } = firebase
    const successMessage = `Firebase generated`
    const appImport = `import firebase from 'firebase/app'`
    const authImport = authentication ? `import 'firebase/auth'` : ''
    const firestoreImport = database === 'firestore' ? `import 'firebase/firestore'` : ''

    const firebaseImports = `
  ${appImport}
  ${authImport}
  ${firestoreImport}
  `

    const { config } = firebase
    const configString = JSON.stringify(config)
    const outputFile = wappDir('firebase/index.js')
    const fileContent = `
${firebaseImports}
import enablePerfMonitoring from '@tenjojeremy/web-toolkit/analytics/firebase'
    
firebase.initializeApp(${configString})
    
enablePerfMonitoring(firebase)
    `
       if (pushNotifications)
        await require('./notifications/pushNotifications')({
          config,
          serviceWorkerReceiverFunction: pushNotifications,
        })

        if (authentication) await require('../../utils/authentication/addState')()

      await createFile(outputFile, fileContent)
      addToIndex({ name: 'Firebase/index', onlyImport: true })
      logSuccessMessage(successMessage)
   
  } else return null
}
