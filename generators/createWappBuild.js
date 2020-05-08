const { logSuccessMessage } = require('../utils/logMessage')
const addNetworkFiles = require('../utils/network/addIsOnlineState')
const { project } = require('../utils/getNodeEnvValue')
const { name: componentsPackageName } = require('../components/constants')

const generateAnimateOnSiteLoad = require('./animateOnSiteLoad')
const generateSplash = require('./splash')
const { initGenerateAppIndex, generateAppIndex } = require('./appIndex')
const generateFirebase = require('./firebase')
const generateTheme = require('./theme/theme')
const generateRouter = require('./router')
const { generateStoreAndListen } = require('./store')
const generateFonts = require('./fonts')
const { initExtraBuildFiles, generateAddExtraBuildFiles } = require('./extraBuildFiles')
const { initBodyTag, generateAddBodyTag } = require('./bodyTag')
const offlineSupport = require('./offlineSupport')

module.exports = async ({ env, wappManifest, step = '1/2' }) => {
  console.log()
  logSuccessMessage('Building wapp...', '', '', step)
  console.log()
  const payload = { wappManifest, env, project, componentsPackageName }

  initGenerateAppIndex(payload)
  initExtraBuildFiles(payload)
  initBodyTag(payload)
  await addNetworkFiles(payload)
  await generateSplash(payload)
  await generateAnimateOnSiteLoad(payload)
  await generateFirebase(payload)
  await generateTheme(payload)
  await generateRouter(payload)
  await generateStoreAndListen(payload)
  await generateFonts(payload)
  await generateAddExtraBuildFiles(payload)
  await generateAddBodyTag(payload)
  await offlineSupport(payload)
  await generateAppIndex(payload)

  logSuccessMessage('Wapp Build Created', 'star2', 'star2')
  console.log()
}
