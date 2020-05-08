const isTest = () => process.env.TEST === 'true'

const getProjectRoot = () => process.cwd()

const wappRootDir = (folder = 'defaults') => __dirname.replace('utils', folder)

const projectDir = (path = '') => {
  const dir = isTest() ? `${getProjectRoot()}/projects/jeremytenjo.com` : getProjectRoot()
  return `${dir}/${path}`
}

const wappDir = (path = '') => {
  const dir = isTest() ? `/projects/jeremytenjo.com` : ''
  return `${getProjectRoot()}${dir}/src/.wapp/_${path}`
}

const buildDir = (path = '') => `${projectDir()}/_build/${path}`

const componentImportPath = (isTrue) => {
  const { name } = require(wappRootDir('package.json'))
  let packageName = name
  const extention = '-build'

  if (isTrue) packageName = `${packageName}${extention}`

  return packageName
}

const wappManifest = () => {
  const wappManifestPath = isTest()
    ? '../projects/jeremytenjo.com/.wapp.manifest.js'
    : projectDir('.wapp.manifest.js')
  const wappManifest = require(wappManifestPath)
  return wappManifest
}

module.exports = {
  wappRootDir,
  projectDir,
  wappManifest,
  buildDir,
  componentImportPath,
  wappDir,
}
