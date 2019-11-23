const fs = require('fs-extra')
const filehound = require('filehound')

module.exports = async () => {
  let masterString = ''
  let stringImports = ''
  let stringProviders = ''
  let files = []
  const projectRootDirectory = process.cwd()
  const storeSrc = `${projectRootDirectory}/src/store`
  const outputFile = `${projectRootDirectory}/src/store/_store.js`

  try {
    files = await filehound
      .create()
      .path(storeSrc)
      .find()

    files.map(async (path, i) => {
      const index = i + 1
      const pathSplit = path.split('\\')
      const fileName = pathSplit.pop().split('.')[0]
      const fileNameUppercase = fileName[0].toUpperCase() + fileName.slice(1)
      const providerName = `${fileNameUppercase}Provider`

      if (providerName === '_storeProvider') return null

      stringImports += `\nimport { ${providerName} } from './${fileName}'`

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

    await fs.outputFile(outputFile, masterString)
  } catch (err) {
    throw err
  }
}
