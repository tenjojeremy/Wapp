const emoji = require('node-emoji')
const chalk = require('chalk')

exports.logSuccessMessage = (
  message,
  _emoji = 'white_check_mark',
  endEmoji,
  stepNumber = '',
) => {
  if (stepNumber !== '') message = `${chalk.magenta(message)}`
  if (stepNumber !== '') stepNumber = `${chalk.magenta(stepNumber)}`

  const successMessage = `${stepNumber}${emoji.get(_emoji)}  ${message} ${
    endEmoji ? emoji.get(endEmoji) : ''
  }`
  console.log(successMessage)
}
