const fs = require('fs')

const projectRootDirectory = process.cwd()
const {
  authentication = true
} = require(`${projectRootDirectory}/.app.manifest.js`)

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

  const outputFile = `./_generatedApp/index.js`
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

  fs.writeFile(outputFile, masterString, (err) => {
    if (err) throw err
    // console.log(`Theme Created`)
  })
}
