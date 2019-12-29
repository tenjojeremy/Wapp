const emoji = require('node-emoji')

exports.logSuccessMessage = (message) => {
  const successMessage = `${emoji.get('white_check_mark')}  ${message}`
  console.log(successMessage)
}
