import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'

export default function App() {
  return (
    <UserContextProvider>
      <h1>Hey this is Tilak the Great</h1>
     <Login/>
     <Profile/>
     </UserContextProvider>
  )
}
