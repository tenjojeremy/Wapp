import { BrowserRouter } from 'react-router-dom'

import HomeRoutes from './profile/routes'

const RouterWrapper = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <HomeRoutes />
      </BrowserRouter>
    </Suspense>
  )
}

export default RouterWrapper
