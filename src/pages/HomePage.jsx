import React from 'react'
import Header from '../components/common/Header'
import { useAuth } from '../Hooks/useAuth'
export default function HomePage() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      
      <Header />
    </div>
  )
}
