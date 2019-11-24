const shell = require('shelljs')

module.exports = async () => {
  shell.exec('yarn webpack-scripts build')
}
