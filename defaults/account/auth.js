import React, { useEffect, memo } from 'react'

// eslint-disable-next-line import/no-unresolved
import useUser from './store/providers/user'
// eslint-disable-next-line import/no-unresolved
import useAuth from './store/providers/auth'

const UserAuthentication = ({ children }) => {
  const redirectUrl = '/login'
  const historyRouter = window.historyRouter
  // Global State
  const { updateUser } = useUser()
  const { attemptSignIn } = useAuth({ redirectUrl })

  // Effects
  useEffect(() => {
    check()
  }, [])

  // Functions
  const check = async () => {
    if (attemptSignIn) {
      const { res = null, redirect = null } = await attemptSignIn()

      updateUser(res)
      redirect && historyRouter.push(redirect)
    }
  }

  // Template
  return <>{children}</>
}

export default memo(UserAuthentication)
