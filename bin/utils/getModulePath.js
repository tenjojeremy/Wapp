const getProjectRoot = () => process.cwd()

exports.wappRoot = (folder = 'defaults') => __dirname.replace('bin\\utils', folder)

exports.projectRoot = (path = '') => `${getProjectRoot()}/${path}`

exports.wappDir = (path = '') => `${getProjectRoot()}/src/.wapp/_${path}`
