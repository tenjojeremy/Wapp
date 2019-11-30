const fs = require('fs-extra')
const filehound = require('filehound')
const emoji = require('node-emoji')

const { wappDir } = require('../constants')
const addToIndex = require('../utils/addToIndex')

module.exports = async () => {
  const successMessage = `${emoji.get('white_check_mark')}  Store generated`
  let masterString = ''
  let stringImports = ''
  let stringProviders = ''
  let files = []
  const projectRootDirectory = process.cwd()

  const srcPath = `${projectRootDirectory}/src`
  const outputFile = `${wappDir}_store.js`

  try {
    files = await filehound
      .create()
      .path(srcPath)
      .glob(['*state*'])
      .find()

    files.map(async (path, i) => {
      const index = i + 1
      const pathSplit = path.split('\\')
      const fileNameFull = pathSplit[pathSplit.length - 1]
      const fileName = pathSplit.pop().split('.')[0]
      const fileNameUppercase = fileName[0].toUpperCase() + fileName.slice(1)
      const providerName = `${fileNameUppercase}Provider`
      const srcIndex = pathSplit.findIndex((item) => item === 'src') + 1
      const statePath = `../${pathSplit.slice(srcIndex).join('/')}/${fileNameFull}`

      stringImports += `\nimport { ${providerName} } from '${statePath}'`

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
    addToIndex({ name: 'Store', position: 1 })
    console.log(successMessage)
  } catch (err) {
    throw err
  }
}
