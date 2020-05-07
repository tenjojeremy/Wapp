const editPackageJson = require('edit-json-file')

const { projectDir } = require('../getModulePath')

module.exports = ({ method, value }) => {
  const file = editPackageJson(projectDir('package.json'))
  file[method](value[0], value[1])

  file.save()
}
