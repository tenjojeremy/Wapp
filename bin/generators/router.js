const fs = require('fs-extra')
const filehound = require('filehound')

module.exports = async () => {
  let masterString = ''
  let stringImports = ''
  let stringRoutes = ''
  let noCoreRoutes = ''
  const projectRootDirectory = process.cwd()
  const outputFile = `${projectRootDirectory}/src/pages/_router.js`
  const pagesSrc = `${projectRootDirectory}/src/pages`
  const files = await filehound
    .create()
    .path(pagesSrc)
    .find()

  const {
    coreTemplateExclude = ['access'],
    excludePages = ['access']
  } = require(`${projectRootDirectory}/.wapp.manifest.js`)

  files.map(async (path) => {
    const pathSplit = path.split('\\')
    const pagesIndex = pathSplit.findIndex((item) => item === 'pages') + 1
    const pageName = pathSplit[pagesIndex]
    const isExcluded = excludePages.includes(pageName)
    const isExcludedCore = coreTemplateExclude.includes(pageName)
    const isRouteFile = path.includes('routes')

    if (isExcluded) {
      return null
    }

    if (isRouteFile) {
      const srcIndex = pathSplit.findIndex((item) => item === 'pages')
      let routePathJoin = pathSplit.slice(srcIndex).join('/')
      const routePath = `./${routePathJoin}`
      const fileName = pathSplit.pop().split('.')[0]
      const fileNameUppercase = fileName[0].toUpperCase() + fileName.slice(1)

      stringImports += `\nimport ${fileNameUppercase} from '${routePath}'`

      if (isExcludedCore) {
        noCoreRoutes += `\n    <${fileNameUppercase} />`
      } else {
        stringRoutes += `\n    <${fileNameUppercase} />`
      }
    }
  })

  masterString = `import React from 'react'\nimport { BrowserRouter } from 'react-router-dom'
  \nimport Core from '../templates/core/core.index'
  ${stringImports}

export default () => (
  <BrowserRouter>
  ${noCoreRoutes}
  <Core>${stringRoutes}
  </Core>
  \n  </BrowserRouter>\n)`

  fs.outputFile(outputFile, masterString, (err) => {
    if (err) throw err
    // console.log(`Theme Created`)
  })
}
