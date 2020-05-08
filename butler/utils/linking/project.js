const shell = require('../shell/index')

module.exports = (pkg) => {
  const { PROJECT } = process.env
  const project = `projects/${PROJECT}`

  shell(`cd ${project} && npm link ${pkg} && cd ..`)
}
