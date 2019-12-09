const emoji = require('node-emoji')

const { projectRoot } = require('../utils/getModulePath')
const createFile = require('../utils/createFile')

const successMessage = `${emoji.get('white_check_mark')}  Account generated`

module.exports = async ({ wappManifest: { authentication } }) => {
  if (authentication) {
    const providerName = `AuthProvider`
    const authImport = `@tenjojeremy/web-toolkit/build/Authentication/Ui/React/UseAuth/${authentication}.index.js`
    const outputFileProvider = projectRoot('src/user/auth.state.js')
    const fileContentProvider = `import state, { ${providerName} } from '${authImport}'    

export default state

export { ${providerName} }
    `

    const outputFileRouter = projectRoot('src/components/routing/_route.js')
    const fileContentRouter = `
    import React from 'react'
    import useAuth from '${authImport}'
    import Route from '@tenjojeremy/web-toolkit/build/Authentication/Ui/React/Router/route.js'

    export default (props) => <Route authState={useAuth} {...props}/>
    `

    try {
      // 1. create provider file
      await createFile(outputFileProvider, fileContentProvider)

      // 2. create Route component with private ability
      await createFile(outputFileRouter, fileContentRouter)
      console.log(successMessage)
    } catch (err) {
      throw err
    }
  }
}
