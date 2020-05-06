const getProjectRoot = () => process.cwd()

const wappRootDir = (folder = 'defaults') => __dirname.replace('utils', folder)
exports.wappRootDir = wappRootDir

exports.projectDir = (path = '', _isTest) => {
  const { isTest } = global
  const dir = isTest || _isTest ? `${getProjectRoot()}/.testApp` : getProjectRoot()

  return `${dir}/${path}`
}

exports.wappDir = (path = '', _isTest) => {
  const { isTest } = global
  const dir = isTest || _isTest ? `/.testApp` : ''

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
