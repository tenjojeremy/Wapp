const getProjectRoot = () => process.cwd()

exports.wappRoot = (folder = 'defaults') => {
  return __dirname.replace('bin\\utils', folder)
}

exports.projectRoot = (path = '') => {
  return `${getProjectRoot()}/${path}`
}

exports.wappDir = (path = '') => {
  return `${getProjectRoot()}/src/.wapp/${path}`
}
