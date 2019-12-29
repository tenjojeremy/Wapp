const { wappDir } = require('../../utils/getModulePath')
const createFile = require('../../utils/createFile')
const { logSuccessMessage } = require('../../utils/logMessage')

const successMessage = 'Firebase Push Notifications generated'

module.exports = async () => {
  const output = wappDir('firebase/notifications.state.js')
  const content = `
export { NotificationsProvider } from '@tenjojeremy/web-toolkit/build/Engagement/Push-Notifications/client/Firebase/React/useNotifications.index'
  `

  await createFile(output, content)
  logSuccessMessage(successMessage)
}
