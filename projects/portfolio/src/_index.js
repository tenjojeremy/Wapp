import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { catchAddToHomeScreenPrompt } from '@tenjojeremy/wapp-build/utils/addToHomeScreen'

import animateOnSiteLoad from './.wapp/_animateOnSiteLoad/animateOnSiteLoad'
import hideSplashScreen from './.wapp/_splashScreen/hideSplashScreen'
import './.wapp/_firebase/index'
import Router from './pages/router'
import Store from './.wapp/_store'
import StyledComponents from './.wapp/_styledComponents'

const App = hot(() => (
  <Store>
    <StyledComponents>
      <Router />
    </StyledComponents>
  </Store>
))

// Load asynchronous
animateOnSiteLoad()
hideSplashScreen()
catchAddToHomeScreenPrompt()

ReactDOM.render(<App />, document.getElementById('root'))
