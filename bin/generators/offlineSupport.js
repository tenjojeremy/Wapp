const createFile = require('../utils/createFile')
const { wappDir } = require('../utils/getModulePath')
const { logSuccessMessage } = require('../utils/logMessage')
const addToIndex = require('../utils/addToIndex')

module.exports = async ({ wappManifest: { offlineSupport = true } }) => {
  if (!offlineSupport) return

  const successMessage = `Offline Service Worker generated`
  const registerSWDir = wappDir('offlineSupport.js')
  const registerSWContent = `
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(
    (registration) => {
      console.log('Service worker registration succeeded:', registration)
    }   
  )
}
`
  await createFile(registerSWDir, registerSWContent)
  addToIndex({ name: 'offlineSupport', onlyImport: true })
  logSuccessMessage(successMessage)
}
