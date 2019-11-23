import React from 'react'
import ReactDOM from 'react-dom'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

import './firebase/_firebase'

import Router from './pages/_router'
import Store from './store/_store'

OfflinePluginRuntime.install()

const App = () => (
  <Store>
    <Router />
  </Store>
)

ReactDOM.render(<App />, document.getElementById('root'))
