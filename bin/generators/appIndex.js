const fs = require('fs-extra')
const emoji = require('node-emoji')

const projectRootDirectory = process.cwd()
const { firebase } = require(`${projectRootDirectory}/.wapp.manifest.js`)

module.exports = async () => {
  const successMessage = `${emoji.get('white_check_mark')}  Index generated`
  let importsString = ''
  const compString = `<Store>
    <Router />
  </Store>`

  if (firebase) {
    importsString += `import './firebase/_firebase'\n`
  }

  const outputFile = `${projectRootDirectory}/src/_index.js`
  let masterString = `import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import { catchAddToHomeScreenPrompt } from '@tenjojeremy/web-toolkit/build/Misc-Utils/AddToHomeScreen/addToHomeScreen.index'


${importsString}
import Router from './pages/router'
import Store from './store/_store'

OfflinePluginRuntime.install()

const App = hot(() => (
  ${compString}
))

// Load asynchronous
catchAddToHomeScreenPrompt()

ReactDOM.render(<App />, document.getElementById('root'))
`

  fs.outputFileSync(outputFile, masterString)

  console.log(successMessage)
}
