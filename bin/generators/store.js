const fs = require('fs')

const fsExtra = require('fs-extra')
const filehound = require('filehound')

module.exports = async () => {
  let masterString = ''
  let stringImports = ''
  let stringProviders = ''
  const projectRootDirectory = process.cwd()
  const outputStoreFolder = `./.wapp/store/providers`
  const outputFile = `./.wapp/store/store.index.js`
  const storeSrc = `${projectRootDirectory}/src/store`
  const files = await filehound
    .create()
    .path(storeSrc)
    .find()

  fsExtra.copySync(storeSrc, outputStoreFolder)

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

  fs.writeFile(outputFile, masterString, (err) => {
    if (err) throw err
    // console.log(`Theme Created`)
  })
}
