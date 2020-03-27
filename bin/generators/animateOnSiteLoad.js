const { wappDir } = require('../utils/getModulePath')
const createFile = require('../utils/createFile')
const { logSuccessMessage } = require('../utils/logMessage')

module.exports = async ({ wappManifest: { animateOnSiteLoad } }) => {
  const animateOnSiteLoadDisabled = animateOnSiteLoad === undefined
  const animationDuration = animateOnSiteLoad || 500
  const createdSplashMessage = `animateOnSiteLoad created`
  const hideFunctionFileDir = wappDir('animateOnSiteLoad/animateOnSiteLoad.js')
  const hideFunctionFile = `
  export default () => {
   ${
     animateOnSiteLoadDisabled
       ? ''
       : ` const root = document.querySelector('#root')
    if (root.animate) {
      root.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: ${animationDuration},
      })
    }`
   }  
  }
  `

  await createFile(hideFunctionFileDir, hideFunctionFile)

  logSuccessMessage(createdSplashMessage)
}
