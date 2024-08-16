import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LeoHeader from './components/LeoHeader/LeoHeader'
import LeoNavbar from './components/LeoNavbar/LeoNavbar'
import LeoBody from './components/LeoBody/LeoBody'
import LeoFooter from './components/LeoFooter/LeoFooter'
function App() {
  

  return (
    <>
     <LeoNavbar/>
     <LeoHeader/>
     <LeoBody/>
     <LeoFooter/>
    </>
  )
}

export default App
