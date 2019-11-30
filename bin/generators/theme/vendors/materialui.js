const fs = require('fs-extra')
const emoji = require('node-emoji')

const { wappDir } = require('../../../constants')
const addToIndex = require('../../../utils/addToIndex')

module.exports = ({ primary = 'black', secondary = 'black' }) => {
  const successMessage = `${emoji.get(
    'white_check_mark'
  )}  Material Ui generated `
  const outputFile = `${wappDir}_materialui.js`
  const string = `import React from 'react'
  import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

  import colors from '../theme/colors'

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: ${primary},
      },
      secondary: {
        main: ${secondary},
      },
    },
    typography: {
      useNextVariants: true,
    },
  })
  
  export default ({ children }) => <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  `

  addToIndex({ name: 'materialui' })

  fs.outputFile(outputFile, string, (err) => {
    if (err) throw err
    console.log(successMessage)
  })
}
