const isMac = require('../isMac')

module.exports = () => {
  const splitValue = isMac() ? '/' : '\\'
  return splitValue
}
