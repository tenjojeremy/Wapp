const dev = require('./dev')
const withFirebaseFunctions = require('./withFirebaseFunctions')

const action = process.argv[3]

module.exports = () => {
  switch (action) {
    case 'withFirebaseFunctions':
      withFirebaseFunctions()
      break

    default:
      dev()
      break
  }
}
