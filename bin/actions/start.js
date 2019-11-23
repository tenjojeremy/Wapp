const chokidar = require('chokidar')
const concurrently = require('concurrently')

const generateAppIndex = require('../generators/appIndex')
const generateFirebase = require('../generators/firebase')
const generateTheme = require('../generators/theme')
const generateRouter = require('../generators/router')
const generateStore = require('../generators/store')
const generateAccount = require('../generators/account')

module.exports = async () => {
  const projectRootDirectory = process.cwd()
  const storeDirPath = `${projectRootDirectory}/src/store`

  try {
    await generateAppIndex()
    await generateFirebase()
    await generateTheme()
    await generateRouter()
    await generateAccount()
    await generateStore()

    chokidar.watch(storeDirPath).on('add', async () => await generateStore())
    chokidar.watch(storeDirPath).on('unlink', async () => await generateStore())

    console.log()

    await concurrently(['yarn webpack-scripts start'])
  } catch (err) {
    throw err
  }
}
