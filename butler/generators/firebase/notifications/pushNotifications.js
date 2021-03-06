const { wappDir, buildDir, componentImportPath } = require('../../../utils/getModulePath')
const createFile = require('../../../utils/files/createFile')
const { logSuccessMessage } = require('../../../utils/logMessage')
const { addExtraBuildFile } = require('../../extraBuildFiles')

const getServiceWorkerString = require('./getServiceWorkerString')

module.exports = async ({ config, serviceWorkerReceiverFunction, isTest }) => {
  if (!config || !serviceWorkerReceiverFunction) return

  const importName = `${componentImportPath(
    isTest,
  )}/engagement/pushNotifications/client/firebase/useNotification`
  const serviceWorkerOutput = wappDir('firebase/notifications/firebase-messaging-sw.js')
  const serviceWorkerContent = getServiceWorkerString({
    config,
    serviceWorkerReceiverFunction,
  })
  const successMessage = 'Firebase Push Notifications generated'
  const stateOutput = wappDir('firebase/notifications/notifications.state.js')
  const stateContent = `
export { NotificationsProvider } from '${importName}'
  `
  const source = serviceWorkerOutput
  const destination = buildDir()
  const extraBuildFiles = {
    from: source,
    to: destination,
  }

  addExtraBuildFile(extraBuildFiles)
  await createFile(stateOutput, stateContent)
  await createFile(serviceWorkerOutput, serviceWorkerContent)
  logSuccessMessage(successMessage)
}
