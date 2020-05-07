const isTest = () => process.env.TEST === 'true'

const getProjectRoot = () => process.cwd()

const wappRootDir = (folder = 'defaults') => __dirname.replace('utils', folder)
exports.wappRootDir = wappRootDir

exports.projectDir = (path = '') => {
  const dir = isTest() ? `${getProjectRoot()}/.testApp` : getProjectRoot()

  return `${dir}/${path}`
}

exports.wappDir = (path = '') => {
  const dir = isTest() ? `/.testApp` : ''

  return `${getProjectRoot()}${dir}/src/.wapp/_${path}`
}

exports.buildDir = (path = '') => `${getProjectRoot()}/build/${path}`

exports.componentImportPath = (isTrue) => {
  const { name } = require(wappRootDir('package.json'))
  let packageName = name
  const extention = '-build'

  if (isTrue) {
    packageName = `${packageName}${extention}`
  }

  return packageName
}
