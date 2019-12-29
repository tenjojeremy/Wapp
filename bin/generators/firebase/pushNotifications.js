const { wappDir } = require('../../utils/getModulePath')
const createFile = require('../../utils/createFile')
const { logSuccessMessage } = require('../../utils/logMessage')

module.exports = async () => {
  const successMessage = 'Firebase Push Notifications generated'
  const output = wappDir('firebase/notifications.state.js')
  const content = `
export { NotificationsProvider } from '@tenjojeremy/web-toolkit/build/Engagement/Push-Notifications/client/Firebase/React/useNotifications.index'
  `

  await createFile(output, content)
  logSuccessMessage(successMessage)
}
