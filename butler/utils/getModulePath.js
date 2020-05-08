const { project } = require('./getNodeEnvValue')

const getRoot = (path) => `${process.cwd()}/${path}`

const wappRootDir = (folder = 'defaults') => __dirname.replace('utils', folder)

const projectDir = (path = '') => {
  const dir = getRoot(`projects/${project}/${path}`)
  return dir
}

const wappDir = (path = '') => {
  return projectDir(`src/.wapp/_${path}`)
}

const buildDir = (path = '') => `${projectDir()}/_build/${path}`

const wappManifest = () => {
  const wappManifestPath = projectDir('.wapp.manifest.js')
  const wappManifest = require(wappManifestPath)
  return wappManifest
}

module.exports = {
  getRoot,
  wappRootDir,
  projectDir,
  wappManifest,
  buildDir,
  wappDir,
}
