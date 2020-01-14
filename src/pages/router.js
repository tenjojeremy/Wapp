import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const RouterWrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <h1 style={{ fontFamily: 'Montserrat' }}>Add pages in ./src/pages</h1>
      <div style={{ backgroundColor: 'var(--color-primary)' }}>as</div>
      {children}
    </BrowserRouter>
  )
}

export default RouterWrapper
