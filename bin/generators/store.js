const fs = require('fs-extra')
const filehound = require('filehound')

module.exports = async () => {
  let masterString = ''
  let stringImports = ''
  let stringProviders = ''
  let files = []
  const projectRootDirectory = process.cwd()
  const storeSrc = `${projectRootDirectory}/src/store`
  const outputStoreFolder = `${projectRootDirectory}/.wapp/store/providers`
  const outputFile = `${projectRootDirectory}/.wapp/store/store.index.js`

  fs.copySync(storeSrc, outputStoreFolder)

  files = await filehound
    .create()
    .path(outputStoreFolder)
    .find()

  files.map(async (path, i) => {
    const index = i + 1
    const pathSplit = path.split('\\')
    const fileName = pathSplit.pop().split('.')[0]
    const fileNameUppercase = fileName[0].toUpperCase() + fileName.slice(1)
    const providerName = `${fileNameUppercase}Provider`

    stringImports += `\nimport { ${providerName} } from './providers/${fileName}'`

    stringProviders += `<${providerName} key={${index}} />,`
  })

  masterString = `import React, { cloneElement } from 'react'
  ${stringImports}
 
 const providers = [
    ${stringProviders}
 ]
 
 const ProviderComposer = ({ contexts, children }) =>
   contexts.reduceRight(
     (kids, parent) =>
       cloneElement(parent, {
         children: kids,
       }),
     children,
   )
 
 const ContextProvider = ({ children }) => (
   <ProviderComposer contexts={providers}>{children}</ProviderComposer>
 )
 
 export default ContextProvider`

  fs.outputFile(outputFile, masterString, (err) => {
    if (err) throw err
    // console.log(`Theme Created`)
  })
}
