exports.wappRoot = (folder = 'defaults') => {
  return __dirname.replace('bin\\utils', folder)
}
