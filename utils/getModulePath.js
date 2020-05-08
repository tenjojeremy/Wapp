const project = process.env.PROJECT

const getProjectRoot = (path) => `${process.cwd()}/${path}`

const wappRootDir = (folder = 'defaults') => __dirname.replace('utils', folder)

const projectDir = (path = '') => {
  const dir = getProjectRoot(`projects/${project}/${path}`)
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
  wappRootDir,
  projectDir,
  wappManifest,
  buildDir,
  wappDir,
}
