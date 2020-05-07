const { logSuccessMessage } = require('../utils/logMessage')
const addNetworkFiles = require('../utils/network/addIsOnlineState')

const generateAnimateOnSiteLoad = require('./animateOnSiteLoad')
const generateSplash = require('./splash')
const generateBabel = require('./babel')
const { initGenerateAppIndex, generateAppIndex } = require('./appIndex')
const generateFirebase = require('./firebase')
const generateTheme = require('./theme/theme')
const generateRouter = require('./router')
const { generateStoreAndListen } = require('./store')
const generateFonts = require('./fonts')
const { initExtraBuildFiles, generateAddExtraBuildFiles } = require('./extraBuildFiles')
const { initBodyTag, generateAddBodyTag } = require('./bodyTag')
const offlineSupport = require('./offlineSupport')

module.exports = async (env, wappManifest) => {
  const isTest = process.env.TEST === 'true'
  const payload = { wappManifest, env, isTest }

  initGenerateAppIndex(payload)
  initExtraBuildFiles(payload)
  initBodyTag(payload)
  await addNetworkFiles(payload)
  await generateSplash(payload)
  await generateAnimateOnSiteLoad(payload)
  await generateBabel(payload)
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
