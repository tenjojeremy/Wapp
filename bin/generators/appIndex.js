const fs = require('fs-extra')

const projectRootDirectory = process.cwd()
const {
  authentication = true
} = require(`${projectRootDirectory}/.wapp.manifest.js`)

module.exports = async () => {
  const importsString = authentication
    ? `import Authentication from './authentication'`
    : ''
  const compString = authentication
    ? `<Store>
   <Authentication>
     <Router />
   </Authentication>
  </Store>`
    : `<Store>
  <Router />
</Store>`

  const outputFile = `${projectRootDirectory}/.wapp/index.js`
  let masterString = `import React from 'react'
import ReactDOM from 'react-dom'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

${importsString}
import Router from './router/router.index'
import Store from './store/store.index'

OfflinePluginRuntime.install()

const App = () => (
  ${compString}
)

ReactDOM.render(<App />, document.getElementById('root'))
`

  fs.outputFileSync(outputFile, masterString)
}
