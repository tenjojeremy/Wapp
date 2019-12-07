import React, { useState, createContext, useContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  // State
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default () => useContext(UserContext)
