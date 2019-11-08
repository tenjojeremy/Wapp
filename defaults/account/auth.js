import React, { useEffect, memo } from 'react'

import UserState from './store/user'

// import useAuth from './useAuth'

const signInFunciton = () => null

const UserAuthentication = ({ children }) => {
  const historyRouter = window.historyRouter
  // Global State
  const { updateUser } = UserState()
  // const { attemptSignIn } = useAuth()

  // Effects
  useEffect(() => {
    check()
  }, [])

  // Functions
  const check = async () => {
    // if (attemptSignIn) {
    const { res = null, redirect = null } = await signInFunciton()
    // const { res = null, redirect = null } = await attemptSignIn()

    updateUser(res)
    redirect && historyRouter.push(redirect)
    // }
  }

  // Template
  return <>{children}</>
}

export default memo(UserAuthentication)
