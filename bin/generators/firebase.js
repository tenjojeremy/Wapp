const emoji = require('node-emoji')

const addToIndex = require('../utils/addToIndex')
const createFile = require('../utils/createFile')
const { wappDir } = require('../utils/getModulePath')

module.exports = async ({ wappManifest: { firebase, authentication = {} } }) => {
  const successMessage = `${emoji.get('white_check_mark')}  Firebase generated`
  const appImport = `import firebase from 'firebase/app'`
  const authImport = authentication === 'firebase' ? `import 'firebase/auth'` : ''

  const firebaseImports = `
  ${appImport}
  ${authImport}
  `

  if (firebase) {
    const { config } = firebase
    const configString = JSON.stringify(config)
    const outputFile = wappDir('_firebase.js')
    const fileContent = `
${firebaseImports}
import enablePersistance from '@tenjojeremy/web-toolkit/build/Database/Firestore/Utils/firestore.persistance'
import enablePerfMonitoring from '@tenjojeremy/web-toolkit/build/Analytics/Firebase/analytics.index'
    
firebase.initializeApp(${configString})
    
enablePerfMonitoring(firebase)
enablePersistance(firebase)    
    `
    try {
      await createFile(outputFile, fileContent)
      addToIndex({ name: 'Firebase', onlyImport: true })
      console.log(successMessage)
    } catch (err) {
      throw err
    }
  }
}
