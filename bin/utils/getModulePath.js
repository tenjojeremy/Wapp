exports.wappRoot = (folder = 'defaults') => {
  return __dirname.replace('bin\\utils', folder)
}

exports.projectRoot = (path = '') => {
  return `${process.cwd()}/${path}`
}
