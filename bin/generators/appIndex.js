const emoji = require('node-emoji')

const createFile = require('../utils/createFile')

const projectRootDirectory = process.cwd()

module.exports = async () => {
  const outputFile = `${projectRootDirectory}/src/_index.js`

  const { indexModules } = global
  indexModules.sort((a, b) => {
    const aPosition = a.position || 999
    const bPosition = b.position || 999
    return aPosition - bPosition
  })
  const successMessage = `${emoji.get('white_check_mark')}  Index generated`
  let masterString = ''
  let importsString = []
  let openingTags = []
  let closingTags = []

  indexModules.map(({ name, onlyImport, path }) => {
    const nameLower = name.charAt(0).toLowerCase() + name.slice(1)
    const _path = path || `./.wapp/_${nameLower}`
    const nameUpper = name.charAt(0).toUpperCase() + name.slice(1)
    if (onlyImport) {
      importsString.push(`import '${_path}'`)
    } else {
      importsString.push(`import ${nameUpper} from '${_path}'`)
      openingTags.push(`<${nameUpper}>`)
      closingTags.unshift(`</${nameUpper}>`)
    }
  })
  importsString = importsString.join('\n')
  openingTags = openingTags.join('\n')
  closingTags = closingTags.join('\n')

  masterString = `import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import { catchAddToHomeScreenPrompt } from '@tenjojeremy/web-toolkit/build/Misc-Utils/AddToHomeScreen/addToHomeScreen.index'


import Router from './pages/router'
${importsString}

OfflinePluginRuntime.install()

const App = hot(() => (
  ${openingTags}
    <Router />
  ${closingTags}
))

// Load asynchronous
catchAddToHomeScreenPrompt()

ReactDOM.render(<App />, document.getElementById('root'))
`

  createFile(outputFile, masterString)

  console.log(successMessage)
}
