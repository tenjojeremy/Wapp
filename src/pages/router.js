import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const RouterWrapper = ({ children }) => {
  return (
    <BrowserRouter>
      Add pages in ./src/pages
      <div style={{ backgroundColor: 'var(--color-primary)' }}>as</div>
      {children}
    </BrowserRouter>
  )
}

export default RouterWrapper
