const fs = require('fs-extra')

const projectRootDirectory = process.cwd()
const { firebase } = require(`${projectRootDirectory}/.wapp.manifest.js`)

module.exports = async () => {
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
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

${importsString}
import Router from './pages/router'
import Store from './store/_store'

OfflinePluginRuntime.install()

const App = () => (
  ${compString}
)

ReactDOM.render(<App />, document.getElementById('root'))
`

  fs.outputFileSync(outputFile, masterString)
}
