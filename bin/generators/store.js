const filehound = require('filehound')
const emoji = require('node-emoji')
const { watch } = require('chokidar')

const { projectRoot, wappDir } = require('../utils/getModulePath')
const addToIndex = require('../utils/addToIndex')
const createFile = require('../utils/createFile')

exports.generateStoreAndListen = async ({ wappManifest: { authentication } }) => {
  const srcDirPath = projectRoot('src')
  const glob = `${srcDirPath}/**/*.state.js`
  const options = {
    ignoreInitial: true,
  }
  const watcher = watch(glob, options)

  watcher.on('add', async () => {
    await generateStore(authentication)
  })
  watcher.on('unlink', async () => {
    await generateStore(authentication)
  })

  await generateStore(authentication)
}

const generateStore = async (authentication) => {
  const successMessage = `${emoji.get('white_check_mark')}  Store generated`
  let masterString = ''
  let stringImports = ''
  let stringProviders = ''
  let files = []
  const srcPath = projectRoot('/src')
  const outputFile = wappDir('_store.js')

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
      const props =
        fileName === 'auth' && authentication ? `service='${authentication}'` : ''

      stringImports += `\nimport { ${providerName} } from '${statePath}'`

      stringProviders += `<${providerName} key={${index}} ${props} />,`
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

    await createFile(outputFile, masterString)
    addToIndex({ name: 'Store', position: 1 })
    console.log(successMessage)
  } catch (err) {
    throw err
  }
}
