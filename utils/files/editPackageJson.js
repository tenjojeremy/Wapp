const editPackageJson = require('edit-json-file')
const { projectDir } = require('../getModulePath')

module.exports = ({ method, value, isTest }) => {
  const file = editPackageJson(projectDir('package.json', isTest))
  console.log({ method })
  file[method](value[0], value[1])

  file.save()
}
