import { useState } from 'react'
import AuthContext from '../context/index'
export default function AuthProvidor({ children }) {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
