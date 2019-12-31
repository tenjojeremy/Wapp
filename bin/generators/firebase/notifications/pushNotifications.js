const { wappDir, buildDir } = require('../../../utils/getModulePath')
const createFile = require('../../../utils/createFile')
const { logSuccessMessage } = require('../../../utils/logMessage')
const { addExtraBuildFile } = require('../../extraBuildFiles')
const { addToBodyTag } = require('../../bodyTag')

const getServiceWorkerString = require('./getServiceWorkerString')

module.exports = async (config) => {
  const serviceWorkerOutput = wappDir('firebase/notifications/firebase-messaging-sw.js')
  const serviceWorkerContent = getServiceWorkerString(config)
  const successMessage = 'Firebase Push Notifications generated'
  const stateOutput = wappDir('firebase/notifications/notifications.state.js')
  const stateContent = `
export { NotificationsProvider } from '@tenjojeremy/web-toolkit/build/Engagement/Push-Notifications/client/Firebase/React/useNotifications.index'
  `
  const source = serviceWorkerOutput
  const destination = buildDir()
  const extraBuildFiles = {
    from: source,
    to: destination,
  }
  const swRegistrationString = `
  <script type="text/javascript">
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then(function(registration) {
      window.firebaseMessagingSWRegistration = registration
    })
    .catch(function(error) {
      console.log('Service worker registration failed, error:', error);
    });
  }
  </script>`

  addToBodyTag(swRegistrationString)
  addExtraBuildFile(extraBuildFiles)
  await createFile(stateOutput, stateContent)
  await createFile(serviceWorkerOutput, serviceWorkerContent)
  logSuccessMessage(successMessage)
}
