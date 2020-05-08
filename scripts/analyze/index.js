const shell = require('../../utils/shell/index')

module.exports = async () => {
  shell('npx webpack-scripts analyze')
}
