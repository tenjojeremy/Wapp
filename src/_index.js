import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import { catchAddToHomeScreenPrompt } from '@tenjojeremy/web-toolkit/build/Misc-Utils/AddToHomeScreen/addToHomeScreen.index'

import hideSplashScreen from './.wapp/_splashScreen/hideSplashScreen'
import './.wapp/_firebase/index'
import Router from './pages/router'
import Store from './.wapp/_store'
import Materialui from './.wapp/_materialui'

OfflinePluginRuntime.install()

const App = hot(() => (
  <Store>
    <Materialui>
      <Router />
    </Materialui>
  </Store>
))

// Load asynchronous
hideSplashScreen()
catchAddToHomeScreenPrompt()

ReactDOM.render(<App />, document.getElementById('root'))
