import React from 'react'
import { BrowserRouter } from 'react-router-dom'
  
import Core from '../templates/core/core.index'
  
import Home from './pages/home/home.routes.js'
import Profile from './pages/profile/profile.routes.js'

export default () => (
  <BrowserRouter>
  
  <Core>
    <Home />
    <Profile />
  </Core>
  
  </BrowserRouter>
)