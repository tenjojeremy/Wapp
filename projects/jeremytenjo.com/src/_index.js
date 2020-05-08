import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { catchAddToHomeScreenPrompt } from '@tenjo/butler/utils/addToHomeScreen'

import animateOnSiteLoad from './.wapp/_animateOnSiteLoad/animateOnSiteLoad'
import hideSplashScreen from './.wapp/_splashScreen/hideSplashScreen'
import './.wapp/_firebase/index'
import Router from './pages/router'
import Store from './.wapp/_store'

const App = hot(() => (
  <Store>
    <Router />
  </Store>
))

// Load asynchronous
animateOnSiteLoad()
hideSplashScreen()
catchAddToHomeScreenPrompt()

ReactDOM.render(<App />, document.getElementById('root'))
