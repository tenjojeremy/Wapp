import React from 'react'
import ReactDOM from 'react-dom'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

import Authentication from './authentication'
import Router from './router/router.index'
import Store from './store/store.index'

OfflinePluginRuntime.install()

const App = () => (
  <Store>
   <Authentication>
     <Router />
   </Authentication>
  </Store>
)

ReactDOM.render(<App />, document.getElementById('root'))
