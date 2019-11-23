import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import { catchAddToHomeScreenPrompt } from '@tenjojeremy/web-toolkit/build/Misc-Utils/AddToHomeScreen/addToHomeScreen.index'


import './firebase/_firebase'

import Router from './pages/router'
import Store from './store/_store'

OfflinePluginRuntime.install()

const App = hot(() => (
  <Store>
    <Router />
  </Store>
))

// Load asynchronous
catchAddToHomeScreenPrompt()

ReactDOM.render(<App />, document.getElementById('root'))
