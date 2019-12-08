const dev = require('./dev')

module.exports = async () => {
  dev('firebase serve --only functions')
}
